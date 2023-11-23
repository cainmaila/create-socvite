#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { argv } from "process";

const cwd = process.cwd();

const argTargetDir = formatTargetDir(argv[2]);

let targetDir = argTargetDir || "test-demo";

const root = path.join(cwd, targetDir);
fs.mkdirSync(root, { recursive: true });

const templateDir = path.resolve(
  fileURLToPath(import.meta.url),
  "../",
  `soc-svelte`
);
const files = fs.readdirSync(templateDir);
for (const file of files.filter((f) => f !== "package.json")) {
  write(file);
}
const pkg = JSON.parse(
  fs.readFileSync(path.join(templateDir, `package.json`), "utf-8")
);

pkg.name = targetDir;

write("package.json", JSON.stringify(pkg, null, 2) + "\n");

function write(file, content) {
  const targetPath = path.join(root, file);
  if (content) {
    fs.writeFileSync(targetPath, content);
  } else {
    copy(path.join(templateDir, file), targetPath);
  }
}

function formatTargetDir(targetDir = "") {
  return targetDir?.trim().replace(/\/+$/g, "");
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

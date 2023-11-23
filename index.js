#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { argv } from "process";

const cwd = process.cwd();
const argTargetDir = formatTargetDir(argv[2]);
const targetDir = argTargetDir || "soc-app";
const root = path.join(cwd, targetDir);

/* 改名 */
const renameFiles = {
  _gitignore: ".gitignore",
  _prettierrc: ".prettierrc",
};

fs.mkdirSync(root, { recursive: true }); // 创建目录

const templateDir = path.resolve(
  // 模板目录
  fileURLToPath(import.meta.url),
  "../",
  `soc-svelte`
);
const files = fs.readdirSync(templateDir); // 模板目录下的文件
for (const file of files.filter((f) => f !== "package.json")) {
  // 过滤掉 package.json
  write(file);
}
const pkg = JSON.parse(
  fs.readFileSync(path.join(templateDir, `package.json`), "utf-8") // 读取 package.json
);
pkg.name = targetDir;
write("package.json", JSON.stringify(pkg, null, 2) + "\n");

console.log(`\n安裝請依據執行以下..\n`);
console.log(`1. git init\n`);
console.log(`2. pnpm i\n`);
console.log(`3. pnpm prepare\n`);

/**
 * 将内容写入文件。
 * @param {string} file - 要写入的文件。
 * @param {string} content - 要写入文件的内容。
 */
function write(file, content) {
  const targetPath = path.join(root, renameFiles[file] ?? file);
  if (content) {
    fs.writeFileSync(targetPath, content);
  } else {
    copy(path.join(templateDir, file), targetPath);
  }
}

/**
 * 格式化目标目录路径，删除尾部斜杠和修剪空格。
 * @param {string} targetDir - 目标目录路径。
 * @returns {string} - 格式化后的目标目录路径。
 */
function formatTargetDir(targetDir = "") {
  return targetDir?.trim().replace(/\/+$/g, "");
}

/**
 * 复制文件或目录
 * @param {string} src - 來源文件或目录
 * @param {string} dest - 目标文件或目录
 */
function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    _copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

/* 递归复制目录 */
function _copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

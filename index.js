import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { argv } from "process";

const argTargetDir = formatTargetDir(argv._[0]);

console.log("122222", argTargetDir);

let targetDir = argTargetDir || "test-demo";

const root = path.join(cwd, targetDir);
fs.mkdirSync(root, { recursive: true });

const templateDir = path.resolve(fileURLToPath(import.meta.url), "./", `cain`);
const files = fs.readdirSync(templateDir);
for (const file of files.filter((f) => f !== "package.json")) {
  write(file);
}
const write = (file, content) => {
  const targetPath = path.join(root, renameFiles[file] ?? file);
  if (content) {
    fs.writeFileSync(targetPath, content);
  } else {
    copy(path.join(templateDir, file), targetPath);
  }
};

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

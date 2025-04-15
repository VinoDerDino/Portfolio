import fs from "fs";
import path from "path";

export function getProjectFolders() {
  const dirPath = path.join(process.cwd(), "public/projects");
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory)
    .map(entry => entry.name);
}
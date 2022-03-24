import nodeWebcam from "node-webcam";
import terminalImage from "terminal-image";
import fs from "fs";

const printWebcamInTerminal = (dirName = `webcam-in-terminal-${Date.now()}`, i = 0) => {
  if (!fs.existsSync(dirName)) fs.mkdirSync(dirName);
  nodeWebcam.capture(`${dirName}/${i}`, { callbackReturn: "base64" }, (err) => {
    if (err) return console.error(err);
    terminalImage.file(`${dirName}/${i}.jpg`).then((res) => console.log(res));
    printWebcamInTerminal(dirName, i + 1);
  });
};

const deleteDirectories = (dirName = "webcam-in-terminal-") => {
  console.log("");
  const rootDir = fs.readdirSync("./");
  for (const dir of rootDir) {
    if (dir.lastIndexOf(`${dirName}`) !== -1) {
      console.log(dir);
      fs.rmdirSync(dir, { recursive: true });
    }
  }
  console.log(`\nDeleted ${dirName} directories\n`);
};

export { printWebcamInTerminal, deleteDirectories };

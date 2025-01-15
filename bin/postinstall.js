// Cross-Platform Node.js Script
const { execSync } = require("child_process");

try {
  console.log("Building brizy-scripts...");
  execSync("npm run build:scripts", { stdio: "inherit" });

  console.log("Installing dependencies without running scripts...");
  execSync("npm install --ignore-scripts", { stdio: "inherit" });
} catch (error) {
  console.error("Error during postinstall:", error.message);
  process.exit(1);
}

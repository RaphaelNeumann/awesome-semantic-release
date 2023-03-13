const plugins = require("./plugins");
const { execSync } = require('child_process');


function getLocalRepoUrl() {
  const topLevelDir = execSync('git rev-parse --show-toplevel').toString().trim();
  return `file://${topLevelDir}/.git`;
}

function getCurrentBranch() {
  return execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim();
}

releaseConfig = {
	plugins
};
if ( process.argv.includes('--dry-run') ) {
  releaseConfig.branches = getCurrentBranch();
  releaseConfig.repositoryUrl = getLocalRepoUrl();
}

module.exports = releaseConfig

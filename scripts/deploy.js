/**
 * Conditional deployment script
 * Only deploys to gh-pages when on the main branch
 */

const { execSync } = require('child_process');
const ghpages = require('gh-pages');
const path = require('path');

// Get the current branch name
function getCurrentBranch() {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch (error) {
    console.error('Error getting current branch:', error.message);
    process.exit(1);
  }
}

// Main function to handle deployment
function deploy() {
  const currentBranch = getCurrentBranch();
  console.log(`Current branch: ${currentBranch}`);

  if (currentBranch === 'main') {
    console.log('On main branch - building and deploying to gh-pages...');
    
    // Build the project first
    try {
      console.log('Building project...');
      execSync('yarn build', { stdio: 'inherit' });
      console.log('Build completed successfully!');
    } catch (error) {
      console.error('Build failed:', error.message);
      process.exit(1);
    }
    
    const distPath = path.join(__dirname, '..', 'dist');
    
    ghpages.publish(distPath, {
      branch: 'gh-pages',
      message: 'Auto-deploy from main branch',
      repo: 'https://github.com/sureshmurali/My-Portfolio.git',
    }, (err) => {
      if (err) {
        console.error('Deployment failed:', err);
        process.exit(1);
      } else {
        console.log('Successfully deployed to gh-pages!');
      }
    });
  } else {
    console.log('Not on main branch - skipping deployment to gh-pages');
    console.log('To deploy, please switch to the main branch and run "yarn deploy"');
  }
}

// Execute the deployment
deploy();

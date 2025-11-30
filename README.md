# Setup

## Prerequisites

- [Node and npm installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Clone the repository

Clone with SSH: `git clone git@github.com:Doctors-For-Choice/alli-website.git`

Clone with HTTPS: `git clone https://github.com/Doctors-For-Choice/alli-website.git`

## Install and run locally

Install: `npm install`

Start the project: `npm start`

This runs the app in the development mode.

- Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Deploy to github pages and alli-app.com

Predeploy: `npm run predeploy`  
Deploy: `npm run deploy`  
Approve changes: Github > Actions > “pages build and deployment” > deploy > “Review pending deployments”  
Create URL redirection: Github > Settings > Pages > Custom Domain > `alli-app.com`  
Open website with refreshed cache (cmd+shift+r) and check for changes

Optional: Visit cloudflare.com and enable “Entwicklermodus” if changes are not visible

- This controls our URL and is responsible for caching and web security

# Contribute

Please reach out to us at team@alli-app.com

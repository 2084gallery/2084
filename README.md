# 2084
Website and Application working with Koa and Quasar
## Install the dependencies
```bash
yarn
```
## How to push in production
### WEBSITE FRONT END
**change remote**
```bash
heroku git:remote -a website-2084-client-heroku
```
**push explicit folder on heroku repository**
```bash
  git subtree push --prefix website/client heroku master
```
### BACK END
**change remote**
```bash
heroku git:remote -a 2084-backend-heroku
```
**push explicit folder on heroku repository**
```bash
git subtree push --prefix backend heroku master
```
**Enjoy...**
## Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```
## Lint the files
```bash
yarn run lint
```
## Build the app for production
```bash
quasar build
```
### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

Quasar Framework
Configuring quasar.conf.js | Quasar Framework
Where, how and what you can configure in a Quasar app.

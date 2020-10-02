# Repro

## Setup

```
cd ember-app
yarn build
cd ../repro
yarn start
```

## Instructions

Open up http://localhost:8080

Click "Mount ember app" to see the Ember content mounted in the page.

Click "Unmount ember app" to remove the Ember content from the page.

In the working version in the `main` branch, the ember app is destroyed and `#ember-app` element is completely cleared.

In the failing version in the `breaking` branch, the ember app seems to not be destroyed and the ember application's content remains in the `#ember-app` element. When you click "Mount ember app" again, the "Hello from ember" appears each time instead of being destroyed and replaced.

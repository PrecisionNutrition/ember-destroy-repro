# Repro

## Setup

Build ember app:

```bash
cd ember-app
yarn
yarn build
```

The run the single-spa style repro:

```bash
cd ../repro
yarn
yarn start
```

## Instructions

Open up http://localhost:8080

Click "Mount ember app" to see the Ember content mounted in the page.

Click "Unmount ember app" to remove the Ember content from the page.

In the working version in the `main` branch, the ember app is destroyed and `#ember-app` element is completely cleared.

In the failing version in the `breaking` branch, the ember app seems to not be destroyed and the ember application's content remains in the `#ember-app` element. When you click "Mount ember app" again, the "Hello from ember" appears each time instead of being destroyed and replaced.

The difference between the two is:

- `main`: ember-source@3.20.5
- `breaking`: ember-source@3.16.10

I believe the issue here is that ember-modifer@2.x is not compatible with ember fully until 3.20.0, when [glimmer was updated to "incorporat[e] the changes for destroyables."](https://github.com/emberjs/ember.js/pull/19025).

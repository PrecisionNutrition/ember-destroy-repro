import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

const opts = {
  App,
  appName: 'ember-app',
  createOpts: {
    rootElement: '#ember-app',
  },
};

export function bootstrap(opts) {
  console.log('bootstrap');

  return Promise.resolve();
}

export function mount() {
  console.log('mount');

  return Promise
    .resolve()
    .then(() => {
      console.log('create');

      opts.applicationInstance = opts.App.create(opts.createOpts);
    })
}

export function unmount() {
  console.log('unmount');

  return Promise
    .resolve()
    .then(() => {
      console.log('destroy');

      opts.applicationInstance.destroy();
      opts.applicationInstance = null;
    });
}

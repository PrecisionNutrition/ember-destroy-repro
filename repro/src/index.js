import * as singleSpa from 'single-spa';
import { loadEmberApp } from 'single-spa-ember';

let mountButton = document.getElementById('mount');
let unmountButton = document.getElementById('unmount');

function loadFunction() {
  console.log('loadFunction');

  return loadEmberApp(
    'ember-app',
    'ember/assets/ember-app.js',
    'ember/assets/vendor.js',
  );
}

function activeWhenFunction({ hash }) {
  return hash.includes('#mounted');
}

singleSpa.registerApplication('ember', loadFunction, activeWhenFunction);

function mountEmberApp() {
  console.log('mountEmberApp');

  window.location = '#mounted'
}

function unmountEmberApp() {
  console.log('unmountEmberApp');

  window.location = '#unmounted';
}

mountButton.addEventListener('click', mountEmberApp);
unmountButton.addEventListener('click', unmountEmberApp);

singleSpa.start();

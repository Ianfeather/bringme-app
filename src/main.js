import App from './App.html';
import { questions } from './data/questions.js';
import { Store } from 'svelte/store.js';

const url = 'https://gist.githubusercontent.com/ben-graves/5b8fe403b6a07239cb1dab2faacdf9a7/raw/cb0657ed9bee51b88485e53fa1971d1b209d605c/bringme.json';

fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(pois => {

      const store = new Store({
        pois,
        questions,
        answered: []
      });

      let app = new App({
        target: document.body,
        store
      });

      window.store = store;
      window.app = app;
    })
    .catch(err => console.log(err));

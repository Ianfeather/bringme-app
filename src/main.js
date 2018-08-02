import App from './App.html';
import { questions } from './data/questions.js';
import { Store } from 'svelte/store.js';

const url = 'https://gist.githubusercontent.com/ben-graves/5b8fe403b6a07239cb1dab2faacdf9a7/raw/30812a69dd0ab04cb6cc5e0386081885e99423ca/bringme.json';

const viewStates = {
    QUESTIONS: 0,
    CITY_SELECT: 1,
    RESULTS: 2,
    PASSPORT: 3
}

const store = new Store({
  pois: [],
  questions,
  answers: [],
  viewStates: viewStates,
  viewState: viewStates.QUESTIONS
});

window.ready = function ready() {
  store.set({ mapsReady: true })
}

fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(pois => {

      store.set({ pois });

      let app = new App({
        target: document.querySelector('.main-content'),
        store
      });

      window.store = store;
      window.app = app;

    })
    .catch(err => console.log(err));

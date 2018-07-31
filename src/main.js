import App from './App.html';
import { questions } from './data/questions.js';


const url = 'https://gist.githubusercontent.com/ben-graves/5b8fe403b6a07239cb1dab2faacdf9a7/raw/f05efd6eeb66f0a6b522b7be3d5b12283099e162/bringme.json';

fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(pois => {
      let app = new App({
        target: document.body,
        data: {
          pois,
          questions
        }
      });
      window.app = app;
    })
    .catch(err => console.log(err));

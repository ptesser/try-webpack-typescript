import './style.css';

import getProfile from './profile';

function draw() {
  const el = document.createElement('div');
  const btn = document.createElement('button');

  el.innerHTML = 'Hello Webpack';
  el.classList.add('hello');

  btn.innerHTML = 'Get Profile';
  btn.onclick = getProfile;

  el.appendChild(btn);
  return el;
}

document.body.appendChild(draw());

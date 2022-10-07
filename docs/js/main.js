window.onload = () => {
  'use strict';

  renderEquation(equation);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.currentTarget.elements.delay.value);
  const state = event.currentTarget.elements.state.value;

  createPromise(delay, state)
    .then(value => {
      iziToast.success({
        message: `\u2705 Fulfilled promise in ${value}ms`,
        position: 'topRight',
        icon: '',
      });
    })
    .catch(value => {
      iziToast.error({
        message: `\u274C Rejected promise in ${value}ms`,
        position: 'topRight',
        icon: '',
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

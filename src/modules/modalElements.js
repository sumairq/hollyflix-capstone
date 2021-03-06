import {
  displayComments,
  addComment,
  countComments,
} from './comment.js';

let commentsLength = 0;

const modalTemplate = (movie, commentsLength) => `
<div class="modal-header">
<button class="close-modal-btn">x</button>
              <figure>
                <img src="${movie.image.medium}" alt="Title image"/>
              </figure>
              </div>
              <h2 class="modal-title">${movie.name}</h2>
            <div class="info-container modal-border">
              <h3>Genres</h2>
              <p class="genres">${movie.genres}</p>
              <h3>Rating</h2>
              <p class="rating">${movie.rating.average}</p>
              <h3>Description</h2>
              <p class="description">${movie.summary}</p> 
            </div>
            <div class="info-container comments modal-border">
              <h3>Comments (<span class="counter">${commentsLength}</span>)</h2>
              <ul class="comment-container"></ul>
              <h3>Add a comment</h2>
              <div class="msgErrorContainer"></div>
              <form action="index_submit" method="POST" accept-charset="utf-8">
                <input class="name-input" type="text" placeholder="Name" name="Your name" maxlength="20" required/>
                <textarea
                  class="textarea"
                  name="text-area"
                  maxlength="220"
                  placeholder="Your Insights" cols="50" rows="10" required></textarea>
                <button type="submit" class="btn add-comment-btn">Comment</button>
              </form>
            </div>
    `;

const modalSection = document.querySelector('.modal-container');
const $body = document.querySelector('body');

const openModal = () => {
  modalSection.classList.add('show-modal');
  $body.classList.add('overflow-hidden');
};

const closeModal = () => {
  modalSection.classList.remove('show-modal');
  $body.classList.remove('overflow-hidden');
  modalSection.innerHTML = '';
};

const createModal = (movieData, commentsLength) => {
  const modalArticle = document.createElement('div');
  modalArticle.className = 'modal-card';
  modalArticle.innerHTML = modalTemplate(movieData, commentsLength);
  modalSection.appendChild(modalArticle);
  const closeModalBtn = document.querySelector('.close-modal-btn');
  closeModalBtn.addEventListener('click', closeModal);
};

const modalHandle = (movies) => {
  const openModalBtn = document.querySelectorAll('.card__comments');

  openModalBtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      openModal();
      commentsLength = await countComments(movies[index].id);
      const urlBase = 'https://api.tvmaze.com/shows/';
      const url = `${urlBase}${movies[index].id}`;
      const movieData = await fetch(url)
        .then((response) => response.json())
        .then((data) => data);

      createModal(movieData, commentsLength);
      const form = document.querySelector('form');
      form.addEventListener('submit', (event) => {
        addComment(event, form, movies[index].id);
      });

      displayComments(movies[index].id);
    });
  });
};

export default modalHandle;

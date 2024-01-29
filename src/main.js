import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  textInput: document.querySelector('#query'),
  searchBtn: document.querySelector('.search-button'),
  galleryList: document.querySelector('.gallery-list'),
  loadingStatus: document.querySelector('.loading'),
};

//options for simplelightbox
const simplelightboxOptions = {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionClass: '',
  captionHTML: true,
};

refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const searchText = e.currentTarget.elements.query.value;
  const searchParams = new URLSearchParams({
    key: '42031589-0742425241f8784341d5a922f',
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  //show loading... status
  refs.loadingStatus.classList.remove('is-hidden');

  try {
    fetch(`https://pixabay.com/api/?${searchParams}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        //!debug
        // console.log(data);

        //if images not found, then alert
        if (data.total === 0) {
          iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
          });
        }
        refs.galleryList.innerHTML = createMarkup(data.hits);

        //hiding loading status
        refs.loadingStatus.classList.add('is-hidden');

        //initializing simplelightbox
        const gallery = new SimpleLightbox(
          '.gallery-list a',
          simplelightboxOptions
        );
        gallery.refresh();
      })
      .catch(error => {
        // Error handling
        console.log(error);
      })
      .finally(() => {
        refs.form.reset();
      });
  } catch {
    console.log('error');
  }
}

function createMarkup(photoList) {
  //creating markup
  return photoList
    .map(photo => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${photo.largeImageURL}">
          <img
            class="gallery-image"
            src="${photo.webformatURL}"
            data-source="${photo.largeImageURL}"
            alt="${photo.tags}"
          />
        </a>
      </li>
      `;
    })
    .join('\n');
}

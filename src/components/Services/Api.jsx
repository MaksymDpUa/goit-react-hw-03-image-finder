const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35914850-286d914d1efc8c48d6a511ecc';

export default function getImage(serchValue, page = 1) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${serchValue}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
}



    

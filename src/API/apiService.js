const KEY = '15301745-a7ab044afd83516da20e75026';
export default function pixApi(search, pageNum, callback) {
  const defaultUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${pageNum}&per_page=12&key=${KEY}`;
  fetch(defaultUrl)
    .then(data => data.json())
    .then(data => callback(data))
    .then(() =>
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      }),
    )
    .catch(error => console.log(error));
}

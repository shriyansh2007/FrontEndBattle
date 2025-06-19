const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

bookForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const cover = document.getElementById('cover').value.trim();

  if (title && author && cover) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book';
    bookCard.innerHTML = `
      <img src="${cover}" alt="${title} cover">
      <h3>${title}</h3>
      <p>by ${author}</p>
    `;
    bookList.appendChild(bookCard);

    // Reset form
    bookForm.reset();
  }
});

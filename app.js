const modal = document.querySelector('#my-modal')
const modalBtn = document.querySelector('#modal-btn')
const closeBtn = document.querySelector('.close')

modalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
}

let myLibrary = [
    {title: 'In Search of Lost Time', author: 'Marcel Proust', pages: '4,215', read: false}, 
    {title: 'Ulysses', author: 'James Joyce', pages: '730', read: false},
    {title: 'Don Quixote', author: 'Miguel de Cervantes', pages: '863', read: false},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: '218', read: false},
    {title: 'War and Peace', author: 'Leo Tolstoy', pages: '1,225 ', read: false}
]

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function addBook() {

}
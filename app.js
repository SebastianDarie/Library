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

let library = [
    {title: 'In Search of Lost Time', author: 'Marcel Proust', pages: '4,215', read: false}, 
    {title: 'Ulysses', author: 'James Joyce', pages: '730', read: false},
    {title: 'Don Quixote', author: 'Miguel de Cervantes', pages: '863', read: false},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: '218', read: false},
    {title: 'War and Peace', author: 'Leo Tolstoy', pages: '1,225 ', read: false}
]

const cards = document.querySelector('.cards')

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

function render() {
    cards.innerHTML = ''

    library.forEach((book, idx) => {
        cards.innerHTML += `
        <div class="card" data-key=${idx}>
        <header>
            <h2>${book.title}</h2>
        </header>    
        <h4>by ${book.author}</h4>
        <p> Number of Pages: ${book.pages} </p>
        <div class="custom-switch">
            <input type="checkbox" class="toggle" checked>
            <label for="read">I have read this book</label>
        </div>
        <span class="delete" onClick="deleteBook(${idx})"><i class="fas fa-trash"></i></span> 
        </div>
        `
    })
}

function deleteBook(idx) {
    library.splice(idx, 1)
    render()
}

render()
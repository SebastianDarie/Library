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

let library = []

const cards = document.querySelector('.cards')
const form = document.querySelector('.form')

loadFromLocalStorage()

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBook(title, author, pages, read) {
    let book = new Book(title, author, pages, read)

    if(inLibrary(book)) return

    library.push(book)

    render()
}

function render() {
    cards.innerHTML = ''

    saveToLocalStorage()

    library.forEach((book, idx) => {
        if(book.read) {
            cards.innerHTML += `
            <div class="card" data-key=${idx}>
            <header>
                <h2>${book.title}</h2>
            </header>    
            <h4>by ${book.author}</h4>
            <p> Number of Pages: ${book.pages} </p>
            <div class="custom-switch">
                <input type="checkbox" class="toggle" checked onClick="changeRead(${idx})">
                <label class="read-label" for="read">I have read this book</label>
            </div>
            <span class="delete" onClick="deleteBook(${idx})"><i class="fas fa-trash"></i></span> 
            </div>
            `
        } else {
            cards.innerHTML += `
            <div class="card" data-key=${idx}>
            <header>
                <h2>${book.title}</h2>
            </header>    
            <h4>by ${book.author}</h4>
            <p> Number of Pages: ${book.pages} </p>
            <div class="custom-switch">
                <input type="checkbox" class="toggle" onClick="changeRead(${idx})">
                <label class="read-label" for="read">I have read this book</label>
            </div>
            <span class="delete" onClick="deleteBook(${idx})"><i class="fas fa-trash"></i></span> 
            </div>
            `
        }
    })
}

function changeRead(idx) {
    library[idx].read ? library[idx].read = false : library[idx].read = true
    render()
}

function deleteBook(idx) {
    library.splice(idx, 1)
    render()
}

function inLibrary(book) {
    return library.some(libraryBook => {
        if(libraryBook.title === book.title && libraryBook.author === book.author) return true
    }) 
}

function saveToLocalStorage() {
    localStorage.setItem('library', JSON.stringify(library))
}

function loadFromLocalStorage() {
    let localLibrary = JSON.parse(localStorage.getItem('library'))

    if(localLibrary === undefined || localLibrary === null || localLibrary.length === 0) {
        addBook('The Great Gatsby', 'F. Scott Fitzgerald', 218, false)
        localStorage.setItem('library', JSON.stringify(library))
    } else {
        library = localLibrary
        render()
    }
}

form.addEventListener('submit', function(e) {
    const title = this.elements['title'].value
    const author = this.elements['author'].value
    const pages = this.elements['pages'].value
    const read = this.elements['read'].checked

    addBook(title, author, pages, read)

    form.reset()
    modal.style.display = 'none'

    e.preventDefault()
})

render()
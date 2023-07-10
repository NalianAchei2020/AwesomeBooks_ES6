import { BookCollection, addBook} from './modules/add_remove_Books.js';
import  {showSection, nav} from './modules/navigation.js'

const btnAdd = document.getElementById('add');

const bookCollection = new BookCollection();

btnAdd.addEventListener('click', addBook);


window.addEventListener('load', () => {
    bookCollection.displayBooks();
    showSection('books-section');
    nav();
  });
  

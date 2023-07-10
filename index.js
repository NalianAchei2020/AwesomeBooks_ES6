import { BookCollection, addBook} from './modules/add_remove_Books.js';
import  {showSection, nav} from './modules/navigation.js'
import timeDate from './modules/time.js';

const btnAdd = document.getElementById('add');

const bookCollection = new BookCollection();

btnAdd.addEventListener('click', addBook);

timeDate();

window.addEventListener('load', () => {
    bookCollection.displayBooks();
    showSection('books-section');
    nav();
  });
  

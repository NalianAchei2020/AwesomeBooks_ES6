// A Navigation bar.
export const showSection = (id) => {
    const sections = document.querySelectorAll('main section');
    sections.forEach((section) => {
      if (section.id === id) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  }
  
  document.getElementById('books-link').addEventListener('click', () => {
    showSection('books-section');
  });
  
  document.getElementById('add-book-link').addEventListener('click', () => {
    showSection('add-book-section');
  });
  
  document.getElementById('contact-link').addEventListener('click', () => {
    showSection('contact-section');
  });
  
 
  // active link
  export const nav = () =>{
  const link = document.querySelectorAll('.link');
  const removeActive = () => {
    link.forEach((link) => {
      link.classList.remove('active');
    });
  }
  
  link.forEach((link) => {
    link.addEventListener('click', () => {
      removeActive();
      link.classList.add('active');
    });
  });}
  
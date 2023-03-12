// Define the book entity
class Book {
    constructor(title, author, publisher, isbn) {
      this.title = title;
      this.author = author;
      this.publisher = publisher;
      this.isbn = isbn;
      this.rating = 0
    }
  }
  // Initialize the array to store the book entities
  let books = [];
  
  // Add a new book to the inventory system
  function addBook() {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let publisher = document.getElementById("publisher").value
    let isbn = document.getElementById("isbn").value
    let book = new Book(title, author, publisher, isbn);
    books.push(book);
    displayBooks()
  }
  
  // Update the details of a book
  function rateStars(index,stars) {
    let book = books[index];
    book.rating = stars
    displayBooks()
  }
  
  // Delete a book from the inventory system
  function deleteBook(index) {
    books.splice(index, 1);
    displayBooks()
  }
  
  // Display the list of books in a table
  function displayBooks() {
    let table = document.getElementById("books-table");
    table.innerHTML = "";
  
    // Add the header row
    let headerRow = table.insertRow();
    headerRow.innerHTML = "<th>Title</th><th>Author</th><th>Publisher</th><th>ISBN</th><th></th>";
  
    // Add the data rows
    for (let i = 0; i < books.length; i++) {
      let book = books[i];
  
      let dataRow = table.insertRow();
      dataRow.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.publisher}</td><td>${book.isbn}</td><td>${book.rating}</td>
      <td><button onclick="rateStars(${i},1)">1</button>
      <button onclick="rateStars(${i},2)">2</button>
      <button onclick="rateStars(${i},3)">3</button>
      <button onclick="rateStars(${i},4)">4</button>
      <button onclick="rateStars(${i},5)">5</button>
      <button onclick="deleteBook(${i})">Delete</button></td>`;
    }
  }
  
  // Display the details of a book in a separate view.
  function displayBookDetails(index) {
    let book = books[index];
  
    let detailsDiv = document.getElementById("book-details");
   
  }
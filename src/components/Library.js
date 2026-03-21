import React, { useState } from "react";
import "./Library.css";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (title && author) {
      setBooks([...books, { title, author }]);
      setTitle("");
      setAuthor("");
    }
  };

  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="library-container">

      <h2>📚 Library Management System</h2>

      {/* Search */}
      <input
        className="search-box"
        placeholder="Search books..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Book Section */}
      <div className="input-box">
        <input
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button onClick={addBook}>➕ Add Book</button>
      </div>

      {/* Book List */}
      <div className="book-list">
        {filteredBooks.length === 0 ? (
          <p>No books found</p>
        ) : (
          filteredBooks.map((book, index) => (
            <div key={index} className="book-card">
              <div>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
              </div>

              <button onClick={() => removeBook(index)}>❌ Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Library;
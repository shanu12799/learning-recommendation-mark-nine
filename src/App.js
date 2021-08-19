import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';


const bookDB = {
  JavaScript: [
    { name: "A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort", rating: "4.5/5", author: 'Mark Myers' },
    { name: " Eloquent JavaScript: A Modern Introduction to Programming", rating: "4/5", author: 'Marjin Haverbeke' },
    { name: " JavaScript & JQuery: Interactive Front-End Web Development", rating: "3.5/5", author: 'Jon Duckett' },
    { name: "JavaScript: The Good Parts", rating: "3/5", author: "Douglas Crockford" },
    { name: "Learn JavaScript VISUALLY", rating: "3/5", author: "Ivelin Demirov" }


  ],

  Python: [
    {
      name: "Python Cookbook: Recipes for Mastering Python 3",
      rating: "5/5",
      author: "David Beazley and Brian K. Jones"

    },
    {
      name: "Fluent Python: Clear, Concise, and Effective Programming",
      rating: "4.5/5",
      author: "Luciano Ramalho"
    },
    {
      name: "A Byte of Python",
      rating: "4/5",
      author: "C.H. Swaroop"
    },
    {
      name: " Learning with Python: How to Think Like a Computer Scientist",
      rating: "3.5/5",
      author: "Allen Downey, Jeff Elkner, and Chris Meyers"
    },
    {
      name: "Head-First Python (2nd edition)",
      rating: "4.5/5",
      author: "Paul Barry"
    }
  ],
  c_programming: [
    {
      name: "C Programming Absolute Beginner’s Guide",
      rating: "5/5",
      author: "Greg Perry and Dean Miller"

    },
    {
      name: "C: The Complete Reference",
      rating: "4.5/5",
      author: "Herbert Schildt"
    },
    {
      name: "C Programming in easy steps, 5th Edition",
      rating: "4/5",
      author: "Mike McGrath"
    },
    {
      name: "Head First C: A Brain-Friendly Guide",
      rating: "3.5/5",
      author: "Griffiths David"
    },
    {
      name: "C Programming Language",
      rating: "3/5",
      author: " Brain W. Kernighan"
    }
  ]
};
function App() {
  const [selectedGenre, setGenre] = useState("JavaScript");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. {" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ margin: '0 auto' }}>
        <div style={{ textAlign: "left", margin: '0 auto' }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {bookDB[selectedGenre].map((book) => (

              <li

                key={book.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger", padding: '10px;' }}> {book.name} </div>
                <div style={{ fontSize: "smaller", padding: '10px;' }}> {book.rating} </div>
                <div style={{ fontSize: "smaller", float: 'right', padding: '10px;' }}>By :- <strong>{book.author}</strong> </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

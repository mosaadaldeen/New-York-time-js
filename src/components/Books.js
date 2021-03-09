import React, { useState, useEffect } from "react";
import Form from "./Form";

export default function Input() {
  const [books, setBooks] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const url = `https://api.nytimes.com/svc/books/v3/lists/current/${term}.json?api-key=8Av9puLnXJ00teXfVKCUUaNaYP0FMTgZ`;

  const fetchArticles = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data.results.books);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // fetchArticles();

  // if (books) {
  // books.map((book) => {
  //   console.log(book);
  //   return (
  //     <div key={book.primary_isbn10} className="books">
  //       <h1>{book.title}</h1>
  //       <p>{book.description}</p>
  //     </div>
  //   );
  // });
  // }

  return (
    <div>
      <Form term={term} changeTerm={setTerm} fetch={fetchArticles} />
      {/* {books !== null &&
        books.map((book) => {
          // console.log(book);
          return (
            <div key={book.primary_isbn10} className="books">
              <h1>{book.title}</h1>
              <p>{book.description}</p>
            </div>
          );
        })} */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => {
          console.log(book);
          return (
            <div key={book.primary_isbn10} className="books">
              <h1>{book.title}</h1>
              <p>{book.description}</p>
            </div>
          );
        })
      )}
      {/* {!loading && books} */}
    </div>
  );
}

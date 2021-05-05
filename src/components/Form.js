import React from "react";
import "../App.css";

export default function Form({ term, changeTerm, fetch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    changeTerm("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={term}
        onChange={(e) => {
          changeTerm(e.target.value);
        }}
        style={{ width: "300px" }}
        type="text"
        className="input"
        placeholder="What are you looking for?"
      />
      {/* <input type="date" name="Date" value={date} /> */}
      <button className="button" type="submit" onClick={fetch}>
        Search
      </button>
    </form>
  );
}

import React, { useState, useEffect } from "react";
import Form from "./Form.js";
import Modal from "./Modal.js";

export default function Input() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=8Av9puLnXJ00teXfVKCUUaNaYP0FMTgZ`;

  const fetchArticles = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.response.docs);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // debouncing

  return (
    <div>
      <Form term={term} changeTerm={setTerm} fetch={fetchArticles} />
      {loading && (
        <div className="lds-circle">
          <div></div>
        </div>
      )}
      <div className="articles">
        {data.length !== 0 &&
          data.map((article) => {
            const headline = article.abstract;
            return (
              <div key={article._id} className="article">
                <h3>{article.headline.main}</h3>
                <p>{article.byline.original}</p>
                <p className="section-name">
                  Section: <strong>{article.section_name}</strong>
                </p>
                <p>At {new Date(article.pub_date).toLocaleDateString()}</p>
                <a onClick={() => setIsOpen(true)}> More </a>

                <Modal
                  // children={headline}
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                >
                  <h4>{headline}</h4>
                  <hr />
                </Modal>
              </div>
            );
          })}
      </div>
    </div>
  );
}

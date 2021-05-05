import React, { useState } from "react";
import Form from "./Form.js";

export default function Input() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=8Av9puLnXJ00teXfVKCUUaNaYP0FMTgZ`;

  const fetchArticles = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const result = data.response.docs;
        console.log(result);
        setData(result);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
            const id = article._id;
            return (
              <div key={id} className="article">
                <h3>{article.headline.main}</h3>
                <p>{article.byline.original}</p>
                <p className="section-name">
                  Section: <strong>{article.section_name}</strong>
                </p>
                <p>At {new Date(article.pub_date).toLocaleDateString()}</p>
                <a className="link" href={article.web_url}>
                  Read more
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}

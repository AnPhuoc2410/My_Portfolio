import React, { useState, useEffect, useContext } from "react";
import "./Quote.scss";
import StyleContext from "../../contexts/StyleContext";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className={`quote-container ${isDark ? "dark-mode" : ""}`}>
      {error ? (
        <p className="quote-error">{error}</p>
      ) : (
        <>
          <p className="quote-text">"{quote}"</p>
          <p className="quote-author">- {author}</p>
        </>
      )}
    </div>
  );
};

export default Quote;
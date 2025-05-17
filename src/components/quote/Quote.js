import React, { useState, useEffect, useContext } from "react";
import "./Quote.scss";
import StyleContext from "../../contexts/StyleContext";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);
  const { isDark } = useContext(StyleContext);

    useEffect(() => {  
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          'https://github.com/mudroljub/programming-quotes-api/raw/master/data/quotes.json'
        );
        
        if (response.data.length > 0) {
          setQuote(response.data[0].text);
          setAuthor(response.data[0].author);
        } else {
          throw new Error('No quotes found');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchQuote();
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

import React from 'react';

const ArticleText = ({ item }) => {
  if (item.expose) {
    return <p className="whitespace-pre-wrap">{item.expose}</p>;
  }
  if (item.text) {
    return <p className="whitespace-pre-wrap">{item.text}</p>;
  }
  if (item.articles) {
    return (
      <ul className="list-disc pl-5">
        {item.articles.map((art, idx) => (
          <li key={idx}>
            <strong>{art.number}:</strong> {art.text}
          </li>
        ))}
      </ul>
    );
  }
  return <p>Contenu non disponible.</p>;
};

export default ArticleText;
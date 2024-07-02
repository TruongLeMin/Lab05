import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Question({ data }) {
  return (
    <div className="mb-4">
      <h2>{data.question}</h2>
      {data.options.map((option, index) => (
        <button key={index} className="btn btn-primary mr-2">{option}</button>
      ))}
    </div>
  );
}

export default Question;
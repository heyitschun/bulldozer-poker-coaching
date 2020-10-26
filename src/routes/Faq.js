import React, { useState, useEffect } from "react";
import axios from "axios";

function Faq() {
  const [faq, setFaq] = useState({});
  const URL = "/faq.json";

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setFaq(res.data.data);
      })
  }, [])

  let faqDisplay;

  if (Object.entries(faq).length > 0) {
    faqDisplay = faq.map(x => {
      return (
        <li className="mt-5">
          <span className="font-bold">{x.question}</span>
          <br />
          <span>{x.answer}</span>
        </li>
      )})
  };

  return (
    <div>
      <h1 className="font-bold text-xl">Frequently Asked Questions</h1>
      <div>
        <ul>
          {faqDisplay}
        </ul>
      </div>
    </div>
  );
};

export default Faq;

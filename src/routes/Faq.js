import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    faqDisplay = faq.map((x, i) => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1+(i*0.2) }}
        >
          <li className="mt-5">
            <span className="font-bold">{x.question}</span>
            <br />
            <span>{x.answer}</span>
          </li>
        </motion.div>
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

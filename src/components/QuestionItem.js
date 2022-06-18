import React, { useState } from "react";

function QuestionItem({ question , onDelette, onUpdate   }) {
  const { id, prompt, answers, correctIndex } = question;
  const [index, setIndex] = useState(correctIndex)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelette(){
      fetch(`http://localhost:4000/questions/${id}`,{
        method: "DELETE"
      })
      .then((r)=> r.json())
      .then(()=> onDelette(id))
  }
  function handleChange(e){
    setIndex(e.target.value);
    handleSelect();
  }

 function  handleSelect(){
  fetch(`http://localhost:4000/questions/${id}`,{
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify({
      "correctIndex": index,
    })
  })
  .then((r)=> r.json())
  .then((data)=> onUpdate(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onClick={handleChange} defaultValue={index}>{options}</select>
      </label>
      <button onClick={handleDelette}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

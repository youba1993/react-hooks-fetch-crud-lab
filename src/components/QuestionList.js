import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({items , onDelete, onUpdate}) {

  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
          {items.map((quest)=>
          <QuestionItem  key={quest.id} question={quest} onDelette={onDelete} onUpdate={onUpdate} />  
         )}
      </ul>
    </section>
  );
}

export default QuestionList;

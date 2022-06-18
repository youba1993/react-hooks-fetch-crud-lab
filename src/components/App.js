import React, { useState , useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [items, setItems] = useState([]);

      useEffect(()=>{
        fetch("http://localhost:4000/questions")
           .then((res)=>res.json())
           .then((itemRes)=>setItems(itemRes))
       },[])

       function handleAddItem(newItem) {
        setItems([...items, newItem]);
      }

      function handleDeleteItem(idItem) {
        const updatedItems = items.filter((item) => item.id !== idItem);
        setItems(updatedItems);
      }
      function handleUpdateItem(updatedItem) {
        const updatedItems = items.map((item) => {
          if (item.id === updatedItem.id){
            return updatedItem;
          }else{return item}
          
        });
        setItems(updatedItems)
      }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  onAddItem={handleAddItem} /> : <QuestionList onDelete={handleDeleteItem} onUpdate={handleUpdateItem}  items={items} />}
    </main>
  );
}

export default App;

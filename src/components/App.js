import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  function handleAddQuestion(newQuestion) {
    //setQuestions([...questions, newQuestion]);
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion= {handleAddQuestion}/> : <QuestionList />}
    </main>
  );
}

export default App;

import React from 'react';
import './App.css';
import {student} from "./02/02";

function App() {
  return (
    <div className="App">
      {`Меня зовут ${student.name}, мне ${student.age} лет`}
        <div>Импортируй компонент сюда</div>
    </div>
  );
}

console.log(student.age)

export default App;

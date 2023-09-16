import logo from "./logo.svg";
import "./App.css";

import GoalList from "./components/GoalList";

function App() {
  const goals=[
    {id:"01",text: "this course is the best"},
    {id:"02",text: "this course is the best haha"},
    {id:"03",text: "this course is the best huhu"}
  ];
  return (
    <div className="test">
      <h1 className="test1">This is react course</h1>
      <GoalList goals={goals}/>
    </div>
  );
}

export default App;

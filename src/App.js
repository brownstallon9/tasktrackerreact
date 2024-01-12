import Header from "./component/Header";
import Task from "./component/Task";
import { useState } from "react"




function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        expected: true,
    },
    {
        id: 1,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        expected: true,
    },
    {
        id: 1,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        expected: false,
    }

    ])


  return (
    <div className="container">
      <Header />
      <Task tasks={tasks} />
    </div>
  );
}


export default App;

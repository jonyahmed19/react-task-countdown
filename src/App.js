import "./App.css";
import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Item from "./components/Item";
import { Box } from "@mui/material";
import { collection, onSnapshot, getFirestore } from "firebase/firestore";
import { app } from "./firebase/firebase.utils";
const db = getFirestore(app);

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "tasks");
    const mount = true;
    onSnapshot(colRef, (data) => {
      if (mount) {
        let task = [];
        data.docs.forEach((item) => {
          task.push({ id: item.id, ...item.data() });
        });
        setTasks(task);
      }
    });
  }, []);

  return (
    <div className="App">
      <Box sx={{ display: "flexbox" }} className="todo-container">
        <AddTodo />
        {tasks.map((task, index) => (
          <Item key={index} task={task} />
        ))}
      </Box>
    </div>
  );
}

export default App;

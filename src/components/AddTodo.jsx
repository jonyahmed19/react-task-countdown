import React, { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { collection, addDoc } from "firebase/firestore/lite";
import db from "../firebase/firebase.utils";
import { serverTimestamp } from "firebase/firestore";

const AddTodo = () => {
  const addTask = (e) => {
    let description = document.getElementById("description");
    let name = document.getElementById("name");

    e.preventDefault();

    if (name.value.length > 0) {
      const colRef = collection(db, "tasks");
      addDoc(colRef, {
        name: name.value,
        description: description.value,
        finished: false,
        order: 3,
      });
    }

    description.value = "";
    name.value = "";

    let a = new Date();
  };

  useEffect(() => {
    let a = new Date();
    console.log(a.getTime() - 1648861703024);
  }, []);

  return (
    <div className="add-todo-area">
      <form onSubmit={addTask}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            gap: "50px",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: "10px",
            }}
          >
            <TextField id="name" label="Task Name" variant="standard" />
            <TextField
              id="description"
              label="Task Description"
              variant="standard"
            />
          </Box>
          <div>
            <button
              type="submit"
              style={{ backgroundColor: "transparent", border: "none" }}
              title="Start Now"
            >
              <PlayCircleOutlineRoundedIcon
                color="primary"
                sx={{ fontSize: 60, cursor: "pointer" }}
              />
            </button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default AddTodo;

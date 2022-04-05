import { Box } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { collection, doc, deleteDoc, getFirestore } from "firebase/firestore";
import { app } from "../firebase/firebase.utils";

const Item = ({ task }) => {
  const deleteTask = async (task) => {
    if (window.confirm("Are you sure to delete?")) {
      const db = getFirestore(app);
      const colRef = collection(db, "tasks");

      await deleteDoc(doc(colRef, task));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        gap: "50px",
        alignItems: "center",
        border: "1px solid green",
        marginTop: "30px",
        padding: "10px 15px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "500" }}>
          {task.name}
          <span className="time">2 Sec</span>
        </h2>
        <p
          style={{
            margin: "0",
          }}
        >
          {task.description}
        </p>
        <p
          style={{
            marginTop: "5px",
          }}
        >
          {task.time} Minutes
        </p>
      </Box>

      <Box
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <PlayCircleOutlineRoundedIcon
          color="primary"
          sx={{ fontSize: 30, cursor: "pointer" }}
        />
        <StopCircleIcon
          color="primary"
          sx={{ fontSize: 30, cursor: "pointer" }}
        />
        <CheckCircleOutlineIcon
          color="primary"
          sx={{ fontSize: 30, cursor: "pointer" }}
        />
        <DeleteOutlineIcon
          onClick={() => deleteTask(task.id)}
          color="primary"
          sx={{ fontSize: 30, cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default Item;

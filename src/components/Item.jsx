import { Box } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Item = ({ task }) => {
  console.log(task);
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
        <h2 style={{ fontSize: "20px", fontWeight: "500" }}>{task.name}</h2>
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

      <Box>
        <CheckCircleOutlineIcon
          color="primary"
          sx={{ fontSize: 30, cursor: "pointer" }}
        />
        <DeleteOutlineIcon
          color="primary"
          sx={{ fontSize: 30, cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default Item;

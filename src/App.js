import { Box, Grid, TextField, Button, Stack } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flexbox" }} className="todo-container">
        <div className="add-todo-area">
          <form>
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
                <TextField id="title" label="Task Name" variant="standard" />
                <TextField
                  id="description"
                  label="Task Description"
                  variant="standard"
                />
              </Box>
              <div>
                <Button variant="contained" color="primary">
                  <PlayCircleOutlineRoundedIcon />
                </Button>
              </div>
            </Box>
          </form>
        </div>
      </Box>

      {/* <Button variant="contained" color="primary">
        Hello
      </Button> */}
    </div>
  );
}

export default App;

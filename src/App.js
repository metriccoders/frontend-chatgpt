import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  const [queryText, setQueryText] = useState("");
  const [answer, setAnswer] = useState("");

  const fetchAnswers = () => {
    if( queryText.trim() !== "") {
    setAnswer("Generating an answer...Please wait...");
    axios
      .post("http://127.0.0.1:80/answers/", {
        query: queryText,
      })
      .then((res) => {
        setAnswer(res.data);
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Metric Coders - General GPT powered by Llama2
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ margin: "20px", textAlign: "center" }}>
        <div>
          <TextField
            onChange={(e) => setQueryText(e.target.value)}
            style={{ width: "800px" }}
            required
            id="outlined-required"
            label="Your question here..."
            placeholder="Your question here..."
          />
          <Button
            variant="contained"
            style={{ margin: "10px", width: "200px" }}
            onClick={fetchAnswers}
          >
            Submit
          </Button>
        </div>
        <div style={{ textAlign: "justify", margin: "30px" }}>{answer}</div>
      </div>
    </Box>
  );
}

export default App;

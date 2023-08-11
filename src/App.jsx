import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={1} sx={{ m: 1 }}>
        <Grid
          sx={{
            boxShadow: 1,
            borderRadius: 2,
            p: 1.5,
          }}
          xs={12}
          sm={8}
          smOffset={2}
          md={6}
          mdOffset={3}
          lg={5}
          lgOffset={0}
          xl={3}
          xlOffset={0}
        >
          <Navbar />
          <TodoList />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

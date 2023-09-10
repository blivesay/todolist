import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#00838F" }}>
        <Toolbar>
          <ChecklistRtlOutlinedIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            My To-Do List featuring React and MUI
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

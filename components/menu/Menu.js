import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Menu() {
  return (
    <Box sx={{ height: "calc(100vh - 68.5px)", background: "red", border: "3px solid black" }} id="menu">
      <Typography variant="h1" component="h2" align="center">
        Menù
      </Typography>
    </Box>
  );
}
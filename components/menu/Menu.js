import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Menu() {
  return (
    <Box sx={{ height: "100vh", background: "red" }} id="menu">
      <Typography variant="h1" component="h2" align='center'>
        Menù
      </Typography>
    </Box>
  );
}

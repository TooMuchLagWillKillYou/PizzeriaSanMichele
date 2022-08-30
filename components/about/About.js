import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function About() {
  return (
    <Box sx={{ height: "100vh", background: "green" }} id="about">
      <Typography variant="h1" component="h2" align="center">
        Dove trovarci
      </Typography>
    </Box>
  );
}

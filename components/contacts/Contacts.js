import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Contacts() {
  return (
    <Box sx={{ height: "calc(100vh - 68.5px)", background: "yellow" }} id="contacts">
      <Typography variant="h1" component="h2" align='center'>
        Contattaci
      </Typography>
    </Box>
  );
}
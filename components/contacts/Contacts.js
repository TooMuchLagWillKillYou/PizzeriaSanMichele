import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Contacts(props) {
  const { headerHeight } = props;
  console.log("headerHeight", props);

  return (
    <Box
      sx={{
        height: `calc(100vh - ${headerHeight}px)`,
        background: "yellow",
      }}
      id="contacts"
    >
      <Typography variant="h1" component="h2" align="center">
        Contattaci
      </Typography>
    </Box>
  );
}

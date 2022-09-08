import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function About(props) {
  const { headerHeight } = props;

  return (
    <Box
      sx={{
        height: `calc(100vh - ${headerHeight}px)`,
        background: "green",
      }}
      id="about"
    >
      <Typography variant="h1" component="h2" align="center">
        Dove trovarci
      </Typography>
    </Box>
  );
}

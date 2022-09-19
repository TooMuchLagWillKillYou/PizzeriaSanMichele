import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Menu(props) {
  const { headerHeight } = props;

  return (
    <Box
      sx={{
        height: `calc(100vh - ${headerHeight}px)`,
        background: "red",
      }}
      id="menu"
    >
      <Typography variant="h2" component="h2" align="center">
        Menù
      </Typography>
    </Box>
  );
}

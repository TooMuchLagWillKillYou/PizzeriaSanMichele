import Carousel from "./Carousel";
import { Box, Typography } from "@mui/material";
import svgLogo from "../../images/logo-white.svg";
import Image from "next/image";

function HomeText() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, .5)",
        position: "absolute",
        top: 68.5,
        left: 0,
        right: 0,
        height: "calc(100vh - 68.5px)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      <Image
        src={svgLogo}
        blurDataURL={svgLogo.blurDataURL}
        width={svgLogo.width / 4}
        height={svgLogo.height / 4}
        alt="cover image"
      />
      <Typography
        variant="h3"
        component="h3"
        sx={{ marginTop: "2rem", color: "white" }}
      >
        0438 936499
      </Typography>
      <Typography paragraph sx={{ color: "white" }}>
        Piazza San Biagio 1/D 31020 San Pietro di Feletto
      </Typography>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <Carousel />
      <HomeText />
    </>
  );
}

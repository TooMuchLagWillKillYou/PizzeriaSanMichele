import Carousel from "./Carousel";
import { Box, Typography } from "@mui/material";
import svgLogo from "../../images/logo-white.svg";
import Image from "next/image";

function HomeText() {
  return (
    <Box className="backdrop" id="home">
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

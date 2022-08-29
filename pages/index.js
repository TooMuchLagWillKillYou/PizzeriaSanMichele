import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideDrawer from "../components/home/SideDrawer";
import TopNavBar from "../components/home/TopNavBar";
import { useState } from "react";
import { Box } from "@mui/system";
import Home from "../components/home/Home";

const pages = [
  { text: "Home", id: "#" },
  { text: "Menù", id: "#menu" },
  { text: "Dove siamo", id: "#doveSiamo" },
  { text: "Contattaci", id: "#contatti" },
];

export default function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <Head>
        <title>Pizzeria San Michele</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />{" "}
        {/* MUI: To ensure proper rendering and touch zooming for all devices */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TopNavBar setOpenDrawer={setOpenDrawer} pages={pages} />
        <SideDrawer open={openDrawer} setOpen={setOpenDrawer} pages={pages} />
        <Home />
        <Box sx={{ height: 800, background: "red" }} id="menu" />
        <Box sx={{ height: 800, background: "green" }} id="doveSiamo" />
        <Box sx={{ height: 800, background: "yellow" }} id="contatti" />
      </main>

      <footer></footer>
    </div>
  );
}

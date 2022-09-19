import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useRef } from "react";

export default function TopNavBar(props) {
  const { pages, setOpenDrawer, setHeaderHeight } = props;
  const topNavBar = useRef();
  const onClick = (sectionID) => {
    let element = document.getElementById(sectionID);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const handleResize = () => {
    setHeaderHeight(topNavBar.current.offsetHeight)
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <AppBar position="fixed" id="topNavBar" ref={topNavBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              display: "flex",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => onClick(page.id)}
                sx={{ my: 2, mx: 3, color: "white", display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

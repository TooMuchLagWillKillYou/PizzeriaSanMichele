import { SwipeableDrawer, Box, Button } from "@mui/material";

export default function SideDrawer(props) {
  const { open, setOpen, pages } = props;

  const onClick = (sectionID) => {
    setOpen(false);
    let element = document.getElementById(sectionID);
    setTimeout(function () {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);
  };

  return (
    <>
      <SwipeableDrawer
        sx={{ display: { xs: "flex", md: "none" } }}
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            my: "auto",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.id}
              // href={page.id}
              onClick={() => onClick(page.id)}
              sx={{ my: 2, mx: 3, color: "black", display: "block" }}
            >
              {page.text}
            </Button>
          ))}
        </Box>
      </SwipeableDrawer>
    </>
  );
}

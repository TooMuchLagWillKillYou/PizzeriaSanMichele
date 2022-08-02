import { SwipeableDrawer, Box, Button } from "@mui/material";

export default function HomeDrawer(props) {
    const { open, setOpen, pages } = props;

    return (
        <>
            <SwipeableDrawer sx={{ display: { xs: 'flex', md: 'none' } }} anchor='right' open={open} onClose={() => setOpen(false)}>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: "column", my: "auto" }}>
                    {pages.map(page => (
                        <Button
                            key={page}
                            sx={{ my: 2, mx: 3, color: 'black', display: 'block' }}
                            >
                                {page}
                        </Button>
                    ))}
                </Box>
            </SwipeableDrawer>
        </>
    )
}


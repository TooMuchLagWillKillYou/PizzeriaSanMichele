import '../styles/globals.css';
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../styles/theme/lightTheme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>)
}

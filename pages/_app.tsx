import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Box } from "@mui/system";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Box sx={{ minHeight: "calc(100vh - 64px - 132px)" }}>
        <Component {...pageProps} />
      </Box>
    </Layout>
  );
}

export default MyApp;

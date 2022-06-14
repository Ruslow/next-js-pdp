import { Box } from "@mui/system";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Box sx={{ minHeight: "calc(100vh - 64px)" }}>
        <Component {...pageProps} />
      </Box>
    </Layout>
  );
}

export default MyApp;

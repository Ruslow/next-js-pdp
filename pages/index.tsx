import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import { APP_NAME } from "../utils/constants/general";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <Container>
        <Typography marginTop={20} variant="h1" component="h1" align="center">
          Hello World
        </Typography>
        <Typography variant="h2" component="h2" align="center">
          Next JS Project
        </Typography>
      </Container>
    </>
  );
};

export default Home;

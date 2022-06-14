import { Link as MUILink, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { APP_NAME } from "../../utils/constants/general";
import { ALL_SOURCES_URL } from "../../utils/constants/urls";
import { GetSourcesResponse, Sources } from "../../utils/types/sources";

const Source = ({ sources }: { sources: Sources }) => {
  const { sourceId } = useRouter().query;
  const sourceItem = sources.find((item) => item.id === sourceId);

  return (
    <>
      <Head>
        <title>
          {APP_NAME} | Sources - {sourceItem?.name}
        </title>
      </Head>
      <Container
        component="section"
        maxWidth="xl"
        sx={{
          paddingBlock: "2rem",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          bgcolor="tan"
          sx={{ borderRadius: "10px", padding: "2rem", marginTop: "10rem" }}
        >
          <Typography>
            <Typography component="span" variant="h5">
              Name
            </Typography>
            : {sourceItem?.name}
          </Typography>
          <Typography>
            <Typography component="span" variant="h6">
              Category
            </Typography>{" "}
            : {sourceItem?.category}
          </Typography>
          <Typography>
            <Typography component="span" variant="h6">
              Description
            </Typography>{" "}
            : {sourceItem?.description}
          </Typography>
          <Typography>
            <Typography component="span" variant="h6">
              Language
            </Typography>{" "}
            : {sourceItem?.language}
          </Typography>
          <MUILink variant="button" href={sourceItem?.url}>
            Learn More
          </MUILink>
        </Box>
      </Container>
    </>
  );
};

export default Source;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<GetSourcesResponse>(ALL_SOURCES_URL);

  return {
    props: {
      sources: data.sources,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<GetSourcesResponse>(ALL_SOURCES_URL);

  const paths = data.sources.map((source) => {
    return {
      params: {
        sourceId: source.id,
      },
    };
  });

  return { paths, fallback: false };
};

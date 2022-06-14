import {
  FormControl,
  InputLabel,
  Link as MUILink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { APP_NAME, CATEGORIES } from "../../utils/constants/general";
import { ALL_SOURCES_URL } from "../../utils/constants/urls";
import { GetSourcesResponse, Sources } from "../../utils/types/sources";

const Sources = ({ sources }: { sources: Sources }) => {
  const [category, setCategory] = React.useState("");
  const [sourceItems, setSourceItems] = useState(sources);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  useEffect(() => {
    if (category) {
      setSourceItems(sources.filter((item) => item.category === category));
    }
  }, [category, sources]);

  return (
    <>
      <Head>
        <title>{APP_NAME} | Sources</title>
      </Head>
      <Container
        component="section"
        sx={{ paddingBlock: "1.5rem" }}
        maxWidth="xl"
      >
        <FormControl sx={{ minWidth: "8rem", marginLeft: "1.8rem" }}>
          <InputLabel>Category</InputLabel>
          <Select value={category} label="Category" onChange={handleChange}>
            {CATEGORIES.map((category, index) => {
              return (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <List>
          {sourceItems.map((item) => {
            return (
              <ListItem key={item.id}>
                <ListItemButton>
                  <Link href={`/sources/${item.id}`}>
                    <MUILink>
                      <ListItemText
                        primary={`${item.name} - ${item.country.toUpperCase()}`}
                        secondary={item.description}
                      />
                    </MUILink>
                  </Link>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </>
  );
};

export default Sources;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<GetSourcesResponse>(ALL_SOURCES_URL);

  return {
    props: {
      sources: data.sources,
    },
  };
};

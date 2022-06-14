import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { APP_NAME } from "../../utils/constants/general";
import { News } from "../../utils/types/news";

const getNews = (url: string) => axios.get<News>(url).then((res) => res.data);

const News = () => {
  const { data, error } = useSWR("/api/news", getNews);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{APP_NAME} | News</title>
      </Head>
      <Container
        component="section"
        sx={{ paddingBlock: "1.5rem" }}
        maxWidth="xl"
      >
        <List>
          <Stack direction="row" spacing={5}>
            {data.map((item) => {
              return (
                <ListItem sx={{ width: "25%" }} key={item.id}>
                  <Card>
                    <Image
                      src={item.img}
                      alt={item.title}
                      height={300}
                      width={400}
                      layout="responsive"
                    ></Image>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={`/news/${item.id}`}>
                        <Button size="small">Learn More</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </ListItem>
              );
            })}
          </Stack>
        </List>
      </Container>
    </>
  );
};

export default News;

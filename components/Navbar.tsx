import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import React from "react";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton size="large" color="inherit" aria-label="logo">
            <NewspaperIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News App
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="/news">
              <Button color="inherit">News</Button>
            </Link>
            <Link href="/categories">
              <Button color="inherit">Categories</Button>
            </Link>
            <Link href="/features">
              <Button color="inherit">Features</Button>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

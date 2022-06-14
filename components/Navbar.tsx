import NewspaperIcon from "@mui/icons-material/Newspaper";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { APP_NAME, NAV_LINKS } from "../utils/constants/general";

const Navbar = () => {
  const router = useRouter();

  const makeLinkActive = (path: string) => {
    return router.pathname === path ? "active" : "";
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Link href="/">
            <IconButton size="large" color="inherit" aria-label="logo">
              <NewspaperIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {APP_NAME}
          </Typography>
          <Stack direction="row" spacing={2}>
            {NAV_LINKS.map(({ name, path, id }) => {
              return (
                <Link key={id} href={path} passHref>
                  <a className={makeLinkActive(path)}>
                    <Button color="inherit">{name}</Button>
                  </a>
                </Link>
              );
            })}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

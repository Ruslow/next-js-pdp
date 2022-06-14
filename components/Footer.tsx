import CopyrightIcon from "@mui/icons-material/Copyright";
import { Icon, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="lightpink" py={3} component="footer">
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
          letterSpacing={2}
          variant="h5"
        >
          SENLA{" "}
          <Icon>
            <CopyrightIcon />
          </Icon>
          {new Date().getFullYear()}
        </Typography>
        <Typography letterSpacing={2} variant="h6">
          All rights are reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

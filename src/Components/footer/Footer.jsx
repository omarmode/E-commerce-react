import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Lottie from "lottie-react";
import eid4 from "../../../public/Animation - 1715255033602.json";
import eid5 from "../../../public/Animation - 1715255443085.json";
function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderRadius: 8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Lottie
        animationData={eid4}
        style={{
          height: "200px",
          //   marginTop: "5px",
        }}
      />
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed
        <Button
          sx={{
            mx: 0.5,
            textTransform: "capitalize",
            fontSize: "18px",
            color: "#ff7790",
          }}
        >
          {" "}
          <a href="https://omarmode.github.io/new-portfolio/">
            Omar Abdelrahman
          </a>{" "}
        </Button>
        by @2024
      </Typography>
      <Lottie
        animationData={eid5}
        style={{
          height: "200px",
          //   marginTop: "5px",
        }}
      />{" "}
    </Box>
  );
}

export default Footer;

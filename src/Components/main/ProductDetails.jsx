import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import eid7 from "../../../public/Animation - 1713904335896.json";
import Lottie from "lottie-react";
function ProductDetails({ useproduct }) {
  // console.log(useproduct);
  const [images, setimages] = useState(0);

  return (
    <Box
      display={"flex"}
      sx={{
        alignItems: "center",
        gap: 3,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={350}
          src={useproduct.attributes.productimg.data[images].attributes.url}
          alt=""
        />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {useproduct.attributes.productTitle}
        </Typography>
        <Typography fontSize={"22px"} my={0.4} color={"crimson"}>
          ${useproduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {useproduct.attributes.productDescription}
        </Typography>
        <Stack
          direction={"row"}
          gap={2}
          my={2}
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
        >
          {useproduct.attributes.productimg.data.map((i, index) => {
            return (
              <img
                onClick={() => {
                  setimages(index);
                }}
                style={{ borderRadius: 3, cursor: "pointer" }}
                width={90}
                height={100}
                key={i.id}
                src={i.attributes.url}
                alt=""
              />
            );
          })}
        </Stack>
        <Button sx={{ textTransform: "capitalize" }} variant="contained">
          <AddShoppingCartOutlined />
          Buy Now
        </Button>
        {/* <Lottie animationData={eid7} style={{ height: "30px" }} />{" "} */}
      </Box>
    </Box>
  );
}

export default ProductDetails;

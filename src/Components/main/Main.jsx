import {
  Box,
  Container,
  Dialog,
  Rating,
  Stack,
  ToggleButtonGroup,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { ShoppingCartCheckoutOutlined, Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetPokemonByNameQuery } from "../../Redux/pokemon";
import Lottie from "lottie-react";
import eid9 from "../../../public/Animation - 1715565015462.json";
function Main() {
  const [alignment, setAlignment] = React.useState("left");

  // console.log(data.data);
  const handleAlignment = (event, newvalue) => {
    if (newvalue !== null) {
      setmydata(newvalue);
    }
    // setAlignment(newvalue);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //get data from api

  const allproductsApi = "productts?populate=*";
  const mencategory = "productts?populate=*&filters[category][$eq]=men";
  const womencategory = "productts?populate=*&filters[category][$eq]=women";
  const [mydata, setmydata] = useState(allproductsApi);
  const { data, error, isLoading } = useGetPokemonByNameQuery(mydata);
  // const [myproduct,setmyproduct] = useState({});
  const [useproduct, setuseproduct] = useState({});

  if (isLoading) {
    return (
      <Box>
        <Lottie
          animationData={eid9}
          style={{
            height: "400px",
          }}
        />
      </Box>
    );
  }

  if (data) {
    return (
      <Container sx={{ mt: 9 }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive barnd selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={mydata}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
              className="my-button"
              value={allproductsApi}
              aria-label="left aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              All Productes
            </ToggleButton>
            <ToggleButton
              className="my-button"
              value={mencategory}
              aria-label="centered"
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            >
              Man Category
            </ToggleButton>
            <ToggleButton
              className="my-button"
              value={womencategory}
              aria-label="right aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              Woman Category{" "}
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={3}
          justifyContent={"space-between"}
        >
          {data.data.map((i) => {
            return (
              <Card
                key={i.id}
                sx={{
                  maxWidth: 330,
                  mt: 5,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    rotate: "1deg",
                    transition: ".35s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 280 }}
                  image={`${i?.attributes?.productimg?.data[0]?.attributes?.url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" component={"div"} gutterBottom>
                      {i.attributes.productTitle}
                    </Typography>
                    <Typography variant="subtitle" component={"p"}>
                      $ {i.attributes.productPrice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color={"text.secondary"}>
                    {i.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    size="larg"
                    onClick={() => {
                      handleClickOpen(), setuseproduct(i);
                    }}
                  >
                    <ShoppingCartCheckoutOutlined />
                    Add To Cart
                  </Button>
                  <Rating
                    name="read-only"
                    value={i.attributes.productRating}
                    precision={0.5}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { rotate: "180deg", transition: ".5s", color: "red" },
            }}
          >
            <Close />
          </IconButton>
          <ProductDetails useproduct={useproduct} />
        </Dialog>
      </Container>
    );
  }
}

export default Main;

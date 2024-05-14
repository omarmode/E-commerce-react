import React from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowForward, Directions } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import IconHero from "./IconHero";
import Lottie from "lottie-react";
import eid3 from "../../../public/Animation - 1715152137534 (2).json";
function Hero() {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 2, pt: 2, alignItems: "center", gap: 3 }}>
      <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 3 }}>
        {" "}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="parent-slider">
            <img src=".\Image\banner-15.jpg" alt="" />
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  left: "10%",
                  textAlign: "left",
                },
                [theme.breakpoints.down("sm")]: {
                  pt: 4,
                  pb: 3,
                },
              }}
              // sx={{ position: "absolute", left: "10%", textAlign: "left" }}
            >
              <Typography sx={{ color: "#222" }} variant="h6">
                LIFESTYLE COLLECTION
              </Typography>
              <Typography
                sx={{ color: "#222", fontWeight: 400, my: 1 }}
                variant="h4"
              >
                MENS
              </Typography>
              <Stack direction={"row"} alignItems={"center"}>
                <Typography sx={{ color: "#333" }} variant="h5">
                  SALE UP TO
                </Typography>
                <Typography sx={{ color: "#D23f57" }} variant="h5">
                  30% OFF
                </Typography>
              </Stack>
              <Typography
                sx={{ color: "#000", fontWeight: 300, my: 1 }}
                variant="body1"
              >
                Get free shipping on orders over $99.00
              </Typography>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  bgcolor: "#222",
                  boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide className="parent-slider">
            <img src=".\Image\banner-25.jpg" alt="" />
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  left: "10%",
                  textAlign: "left",
                },
                [theme.breakpoints.down("sm")]: {
                  pt: 4,
                  pb: 3,
                },
              }}
              // sx={{ position: "absolute", left: "10%", textAlign: "left" }}
            >
              <Typography sx={{ color: "#222" }} variant="h6">
                LIFESTYLE COLLECTION
              </Typography>
              <Typography
                sx={{ color: "#222", fontWeight: 400, my: 1 }}
                variant="h5"
              >
                WOMENS
              </Typography>
              <Stack
                // sx={{ justifyContent: "center" }}
                direction={"row"}
                alignItems={"center"}
              >
                <Typography sx={{ color: "#333" }} variant="h5">
                  SALE UP TO
                </Typography>
                <Typography sx={{ color: "#D23f57" }} variant="h5">
                  30% OFF
                </Typography>
              </Stack>
              <Typography
                sx={{ color: "#000", fontWeight: 300, my: 1 }}
                variant="body1"
              >
                Get free shipping on orders over $99.00
              </Typography>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  bgcolor: "#222",
                  boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Box sx={{ display: { xs: "none", md: "block", width: "35%" } }}>
          <Box sx={{ position: "relative" }}>
            <img
              src="public\Image\banner-17.jpg"
              style={{ width: "100%" }}
              alt=""
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 32,
              }}
            >
              <Typography
                sx={{ color: "#283445", fontSize: "18px" }}
                variant="caption"
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                sx={{ color: "#283445", fontSize: "18px", mt: 1 }}
                variant="h6"
              >
                SUMMER{" "}
              </Typography>
              <Typography
                sx={{ color: "#283445", fontSize: "18px", mt: 1 }}
                variant="h6"
              >
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".5s",
                  ":hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                Shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img
              src="public\Image\banner-16.jpg"
              style={{ width: "100%" }}
              alt=""
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 32,
              }}
            >
              <Typography
                sx={{ color: "#283445", fontSize: "18px" }}
                variant="caption"
              >
                GAMING 4K
              </Typography>
              <Typography
                sx={{ color: "#283445", fontSize: "18px", mt: 1 }}
                variant="h6"
              >
                DESKTOPS &
              </Typography>
              <Typography
                sx={{ color: "#283445", fontSize: "18px" }}
                variant="h6"
              >
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".5s",
                  ":hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                Shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconHero />
      <Lottie
        animationData={eid3}
        style={{
          height: "400px",
          color: theme.palette.omar.omar,
          marginTop: "5px",
        }}
      />{" "}
    </Container>
  );
}

export default Hero;

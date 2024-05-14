import {
  Box,
  Container,
  Drawer,
  IconButton,
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
import ListItemButton from "@mui/material/ListItemButton";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Close,
  ContentCut,
  ElectricBikeOutlined,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  MenuOpen,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";
import Lottie from "lottie-react";
import eid from "../../../public/Animation - 1714893519468.json";
import eid1 from "../../../public/Animation - 1714895057068.json";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";
function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ width: 220, backgroundColor: theme.palette.mycolor.main }}
        >
          <Window />
          <Typography sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiList-root ": {
              backgroundColor: theme.palette.mycolor.main,
            },
          }}
        >
          <Box sx={{ width: 220, backgroundColor: theme.palette.mycolor.main }}>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ElectricBikeOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Bikes</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LaptopChromebookOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Electronics</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <MenuBookOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Books</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
            </MenuItem>
            <Lottie animationData={eid} style={{ height: "100px" }} />{" "}
          </Box>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1150px)") && (
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ display: "flex", gap: 4 }}
        >
          <Links title={"Home"} />
          <Links title={"Mega menu"} />
          <Links title={"Full screen menu"} />
          <Links title={"Pages"} />
          <Links title={"user account"} />
          <Links title={"Vender account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1150px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuOpen />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root..css-1chynqf-MuiModal-root-MuiDrawer-root": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            width: 444,
            mx: "auto",
            my: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { rotate: "180deg", transition: ".5s", color: "red" },
            }}
          >
            <Close />
          </IconButton>
          {[
            { minelink: "Home", sublink: ["link1", "link2", "link3"] },
            { minelink: "Mega menu", sublink: ["link1", "link2", "link3"] },
            {
              minelink: "Full screen menu",
              sublink: ["link1", "link2", "link3"],
            },
            { minelink: "Pages", sublink: ["link1", "link2", "link3"] },
            { minelink: "user account", sublink: ["link1", "link2", "link3"] },
            {
              minelink: "Vender account",
              sublink: ["link1", "link2", "link3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.minelink}
                sx={{
                  // ".MuiPaper-root": { height: "10%" },

                  bgcolor: "inherit",
                }}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item.minelink}
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.sublink.map((i) => {
                    return (
                      <ListItem key={i} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={i} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
        <Lottie animationData={eid1} style={{ height: "300px" }} />{" "}
      </Drawer>
    </Container>
  );
}

export default Header3;

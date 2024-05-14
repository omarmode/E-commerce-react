import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
function Links({ title }) {
  return (
    <Box
      sx={{
        ":hover": {
          ".show-hover": { display: "block" },

          cursor: "pointer",
        },

        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMoreIcon />
      <Box
        className="show-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          transform: "translatex(-50%)",
          left: "50%",
          display: "none",
          zIndex: 2,
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "13px" },
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{
                  position: "relative",
                  ":hover .Products-show": { display: "block" },
                }}
              >
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "12px" },
                    }}
                    primary="Products"
                  />
                  <KeyboardArrowRightOutlined />
                </ListItemButton>
                <Box
                  className="Products-show"
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: 20,
                    left: "100%",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: "150px" }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": { fontSize: "15px" },
                              }}
                              primary="Add product"
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Edit product " />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Other" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}

export default Links;

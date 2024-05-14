import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBoltOutlined,
  ElectricCarOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

function IconHero() {
  const theme = useTheme();
  return (
    <Container
      sx={{ bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
      >
        <Mybox
          title={"Fast Delivery"}
          subtitle={"Start From $10"}
          icon={<ElectricBoltOutlined />}
        />
        <Mybox
          title={"Money Guarantee"}
          subtitle={"7 Day Back"}
          icon={<CreditScoreOutlined />}
        />
        <Mybox
          title={"365 Days"}
          subtitle={"For Free return"}
          icon={<WorkspacePremiumOutlined />}
        />
        <Mybox
          title={"Payment"}
          subtitle={"Secure system"}
          icon={<AccessAlarmOutlined />}
        />
      </Stack>
    </Container>
  );
}

export default IconHero;

const Mybox = ({ icon, subtitle, title }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        width: 200,
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        py: 2,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.omar.omar }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

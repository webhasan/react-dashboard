import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { useContext } from "react";
import { useProSidebar } from "react-pro-sidebar";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { broken, toggleSidebar } = useProSidebar();

  return (
    <Box
      display="flex"
      flexWrap="wrap-reverse"
      justifyContent="space-between"
      p={2}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
      >
        {broken && (
          <IconButton
            aria-label="Toggle Menu"
            sx={{ marginRight: "10px", background: colors.primary[600] }}
            onClick={() => toggleSidebar()}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        display="flex"
        sx={{
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            justifyContent: "center",
            marginBottom: "20px",
          },
        }}
      >
        <IconButton type="button" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>

        <IconButton type="button">
          <NotificationsIcon />
        </IconButton>

        <IconButton type="button">
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton type="button">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Topbar;

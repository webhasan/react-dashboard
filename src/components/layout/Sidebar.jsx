import admin from "../../assets/admin.png";

import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutline,
  BarChartOutlined,
  PieChartOutline,
  Menu as MenuIcon,
  EventSeat,
  QuestionAnswer,
  StackedLineChart,
} from "@mui/icons-material";

import { useState } from "react";
import { tokens } from "../../theme";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  const [selected, setSelected] = useState("Dashboard");

  const Item = ({ icon: Icon, title, to }) => {
    return (
      <MenuItem
        active={selected === title}
        icon={Icon ? <Icon /> : ""}
        component={<Link to={to} />}
        onClick={() => setSelected(title)}
      >
        {title}
      </MenuItem>
    );
  };

  return (
    <Box display="flex">
      <ProSidebar
        rootStyles={{
          height: "100%",
          borderColor: 'transparent',
          [".ps-sidebar-container"]: {
            background: colors.primary[400],
          },
        }}
        breakPoint="lg"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={collapsed ? "center" : "space-between"}
          p={2}
        >
          {!collapsed && <Typography variant="h4">Admin</Typography>}

          <IconButton
            aria-label="Toggle Menu"
            onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box mb="30px">
          <Box textAlign="center" padding="10px 10px 0 10px">
            <img
              src={admin}
              alt="Md Hasan"
              width="70"
              height="70"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          {!collapsed && (
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Md Hasan
              </Typography>

              <Typography variant="h5" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          )}
        </Box>

        <Menu
          menuItemStyles={{
            button: ({ active }) => ({
              color: active ? "#868dfb" : undefined,
              transition: "color .3s",
              background: "transparent",
              "&:hover": {
                color: "#868dfb",
                background: "transparent",
              },
            }),
          }}
        >
          <Item to="/" icon={HomeOutlined} title="Dashboard" />
          <Item to="/team" icon={PeopleOutline} title="Manage Team" />
          <Item to="/contacts" icon={ContactsOutlined} title="Contacts" />
          <Item to="/invoices" icon={ReceiptOutlined} title="Invoices" />

          <Item to="/add-user" icon={PersonOutline} title="User Profile" />
          <Item to="/events" icon={EventSeat} title="Events" />
          <Item to="/faqs" icon={QuestionAnswer} title="FAQs" />
          <Item to="/chart" icon={BarChartOutlined} title="Bar Chart" />
          <Item to="/chart-pi" icon={PieChartOutline} title="PI Chart" />
          <Item to="/chart-line" icon={StackedLineChart} title="Line Chart" />
        </Menu>
      </ProSidebar>
    </Box>
  );
};
export default Sidebar;

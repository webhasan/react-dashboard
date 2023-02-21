import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import { LockOpenOutlined } from "@mui/icons-material";
import { SecurityOutlined } from "@mui/icons-material";
import PageHeader from "../../components/PageHeader";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      type: "number",
      headerName: "Age",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px 10px"
            sx={{ textTransform: "capitalize" }}
            display="flex"
            justifyContent="space-between"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box
      p={2}
      sx={{
        ["& .MuiDataGrid-columnHeaders"]: {
          backgroundColor: colors.blueAccent[500],
          border: "none",
        },
        ["& .MuiDataGrid-columnSeparator"]: {
          color: "transparent !important",
        },
      }}
    >
      <PageHeader title="TEAM" subTitle="Managing the team members" />
      <Box height="72vh">
        <DataGrid columns={columns} rows={mockDataTeam} />
      </Box>
    </Box>
  );
};

export default Team;

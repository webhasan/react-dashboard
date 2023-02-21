import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";
import PageHeader from "../../components/PageHeader";

const Invoices = () => {
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
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: ({ row: { cost } }) => {
        return (
          <Typography color={colors.blueAccent[300]} fontWeight="bold">
            ${cost}
          </Typography>
        );
      },
    },
    {
      field: "phone",
      headerName: "Phone Number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      headerAlign: "left",
      align: "left",
      flex: 1,
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
        ["& .MuiDataGrid-toolbarContainer .MuiButtonBase-root"]: {
          color: colors.grey[100],
        },
        ["& .MuiDataGrid-toolbarContainer .MuiButton-startIcon"]: {
          color: colors.grey[100],
        },
        ["& .MuiDataGrid-cellCheckbox .MuiSvgIcon-root"]: {
          color: `${colors.blueAccent[400]} !important`,
        },
        ["& .MuiDataGrid-panelFooter .MuiButtonBase-root"]: {
          color: `${colors.grey[300]} !important`,
        },
      }}
    >
      <PageHeader title="INVOICES" subTitle="List of all invoice managements" />
      <Box height="72vh">
        <DataGrid
          checkboxSelection
          columns={columns}
          rows={mockDataInvoices}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;

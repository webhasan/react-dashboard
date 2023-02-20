import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import PageHeader from "../../components/PageHeader";
import { Box, useTheme, Typography } from "@mui/material";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'registrarId', headerName: 'Register ID'},
        {field: 'name', headerName: 'Name', flex: 1, cellClassName: "name-column--cell"},
        {field: 'age', type: "number", headerName: 'Age', headerAlign: 'left', align: 'left'},
        {field: 'phone', headerName: 'Phone Number', headerAlign: 'left', align: 'left', flex: 1},
        {field: 'email', headerName: 'Email', flex: 1},
        {field: 'address', headerName: 'Address', flex: 1},
        {field: 'city', headerName: 'City', flex: 1},
        {field: 'zipCode', headerName: 'Zip Code', flex: 1},
    ];
    
    return (
        <Box p={2} sx={{
            ['& .MuiDataGrid-columnHeaders']: {
               backgroundColor: colors.blueAccent[500],
               border: "none"
            },
            ['& .MuiDataGrid-columnSeparator']: {
                color: "transparent !important"
            },
            ['& .MuiDataGrid-toolbarContainer .MuiButtonBase-root']: {
                color: colors.grey[100] 
            },
            ['& .MuiDataGrid-toolbarContainer .MuiButton-startIcon']: {
                color: colors.grey[100] 
            },
            ['& .name-column--cell']: {
                color: colors.blueAccent[400],
            }
        }}>
            <PageHeader title="CONTACTS" subTitle="Contact information for future reference"/>
            <Box height="72vh">
                <DataGrid
                    columns={columns}
                    rows={mockDataContacts}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}

export default Contacts;
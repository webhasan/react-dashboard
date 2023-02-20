import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import BarChart from "../../components/BarChart";

const BarChartPage = () => {
    return (
        <Box p={2}>
            <PageHeader title="Bar Chart" subTitle="Chart for different type of food compression"/>

            <Box height="80vh">
                <BarChart/>
            </Box>
        </Box>
    )
}

export default BarChartPage;
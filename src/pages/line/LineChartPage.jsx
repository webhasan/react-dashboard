import PageHeader from "../../components/PageHeader";
import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";

const LineChartPage = () => {
    return (
        <Box p={2}>
            <PageHeader  title="Line Chart" subTitle="Example of responsive Line chart"/>
            <Box height="75vh">
                <LineChart/>
            </Box>
        </Box>
    )
}

export default LineChartPage;
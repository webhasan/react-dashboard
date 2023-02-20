import PageHeader from "../../components/PageHeader";
import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";

const LineChartPage = () => {
    return (
        <Box p={2}>
            <PageHeader  title="Pi Chart" subTitle="Example of responsive PI chart"/>
            <Box height="75vh">
                <LineChart/>
            </Box>
        </Box>
    )
}

export default LineChartPage;
import PageHeader from "../../components/PageHeader";
import { Box } from "@mui/material";
import PiChart from "../../components/PiChart";

const PiChartPage = () => {
    return (
        <Box p={2}>
            <PageHeader  title="Pi Chart" subTitle="Example of responsive PI chart"/>
            <Box height="75vh">
                <PiChart/>
            </Box>
        </Box>
    )
}

export default PiChartPage;
import { ExpandMoreOutlined } from "@mui/icons-material";
import { useTheme, Box, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { tokens } from "../../theme";


const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);    

    return (
        <Box p={2}>
            <PageHeader title="FAQ" subTitle="Frequently ask questions"/>

            <Box mt="50px">
                <Accordion defaultExpanded  >
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography variant="h3" color={colors.greenAccent[500]}>
                            An Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ducimus consequatur, omnis totam deserunt earum beatae saepe aliquam natus aut provident! Fuga iste voluptatum amet sapiente rerum porro, saepe mollitia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography variant="h3" color={colors.greenAccent[500]}>
                            Lorem ipsum dolor sit amet.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ducimus consequatur, omnis totam deserunt earum beatae saepe aliquam natus aut provident! Fuga iste voluptatum amet sapiente rerum porro, saepe mollitia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography variant="h3" color={colors.greenAccent[500]}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ducimus consequatur, omnis totam deserunt earum beatae saepe aliquam natus aut provident! Fuga iste voluptatum amet sapiente rerum porro, saepe mollitia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography variant="h3" color={colors.greenAccent[500]}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ducimus consequatur, omnis totam deserunt earum beatae saepe aliquam natus aut provident! Fuga iste voluptatum amet sapiente rerum porro, saepe mollitia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography variant="h3" color={colors.greenAccent[500]}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ducimus consequatur, omnis totam deserunt earum beatae saepe aliquam natus aut provident! Fuga iste voluptatum amet sapiente rerum porro, saepe mollitia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography variant="h3" color={colors.greenAccent[500]}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ducimus consequatur, omnis totam deserunt earum beatae saepe aliquam natus aut provident! Fuga iste voluptatum amet sapiente rerum porro, saepe mollitia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>    
        </Box>

    )
}

export default Faq;
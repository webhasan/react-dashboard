import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";


import Topbar from "./scens/global/Topbar";
import Sidebar from "./scens/global/Sidebar";
import Team from "./scens/team";
import Invoices from "./scens/invoices";

import Dashboard from "./scens/dashboard";
import Contacts from "./scens/contacts";
import ProfileForm from "./scens/Form";
import EventCalender from "./scens/events";
import Faq from "./scens/faq/Faq";
import BarChartPage from './scens/bar';

// import Team from "./scens/team";
// import Invoices from "./scens/invoices";
// import Contact from "./scens/contact";
// import Bar from "./scens/bar";
// import Form from "./scens/form";
// import Line from "./scens/line";
// import Pie from "./scens/pie";
// import FAQ from "./scens/faq";
// import Geography from "./scens/geography";
// import Calender from "./scens/calender";

const App = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <ProSidebarProvider>
                <CssBaseline />
                <div className="app">
                    <Sidebar/>
                    <div className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard/>} />
                            <Route path="/team" element={<Team/>} />
                            <Route path="/contacts" element={<Contacts/>} />
                            <Route path="/invoices" element={<Invoices/>} />
                            <Route path="/add-user" element={<ProfileForm/>} />
                            <Route path="/events" element={<EventCalender/>} />
                            <Route path="/faqs" element={<Faq/>} />
                            <Route path="/chart" element={<BarChartPage/>} />
                            
                            {/* 
                            <Route path="/invoices" element={<Invoices/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/bar" element={<Bar/>}/>
                            <Route path="/form" element={<Form/>}/>
                            <Route path="/line" element={<Line/>}/>
                            <Route path="/pie" element={<Pie/>}/>
                            <Route path="/faq" element={<FAQ/>}/>
                            <Route path="/geography" element={<Geography/>}/>
                            <Route path="/calendar" element={<Calendar/>}/> */}
                        </Routes>
                    </div>
                </div>
                </ProSidebarProvider>
            </ThemeProvider>    
        </ColorModeContext.Provider>
    )
}

export default App;
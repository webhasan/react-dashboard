import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";


import Topbar from "./components/layout/Topbar";
import Sidebar from "./components/layout/Sidebar";
import Team from "./pages/team";
import Invoices from "./pages/invoices";

import Dashboard from "./pages/dashboard";
import Contacts from "./pages/contacts";
import ProfileForm from "./pages/Form";
import EventCalender from "./pages/events";
import Faq from "./pages/faq/Faq";
import BarChartPage from './pages/bar';
import PiChartPage from "./pages/pi/PiChartPage";
import LineChartPage from "./pages/line/LineChartPage";

const App = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <ProSidebarProvider>
                <CssBaseline />
                <div className="app">
                    <Sidebar/>
                    <main className="content">
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
                            <Route path="/chart-pi" element={<PiChartPage/>} />
                            <Route path="/chart-Line" element={<LineChartPage/>} />
                        </Routes>
                    </main>
                </div>
                </ProSidebarProvider>
            </ThemeProvider>    
        </ColorModeContext.Provider>
    )
}
export default App;

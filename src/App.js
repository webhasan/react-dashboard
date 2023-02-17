import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <div className="content">
                        
                    </div>
                </div>
            </ThemeProvider>    
        </ColorModeContext.Provider>
    )
}

export default App;
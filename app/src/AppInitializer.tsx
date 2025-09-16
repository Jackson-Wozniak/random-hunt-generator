import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Page from "./components/Shared/Page";
import { AppTheme } from "./theme/Theme";
import HunteGeneratorPage from "./components/HuntGenerator/HuntGeneratorPage";

const AppInitializer: React.FC = () => {
    const [displayType, setDisplayType] = useState<'desktop' | 'mobile'>();

    useEffect(() => {
        const handleResize = () => {
            setDisplayType(window.innerWidth < window.innerHeight ? 'mobile' : 'desktop');
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

	return (
		<ThemeProvider theme={AppTheme(displayType)}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Page component={<HunteGeneratorPage/>} />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
	)
}

export default AppInitializer;
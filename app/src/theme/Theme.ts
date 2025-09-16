import { createTheme, type Theme } from "@mui/material/styles";
import "@mui/material/styles";

export const AppTheme = (displayType: 'desktop' | 'mobile' = 'desktop',
    width: number = 0, height: number = 0
): Theme => createTheme({
    palette : {
        primary: {
            main: "#d03801ff",
            contrastText: "#ffffffff"
        },
        secondary: {
            main: "#e2ee15",
            contrastText: "#272727ff"
        },
        mode: 'light',
        background : {
            primary: "white",
            secondary: "whitesmoke",
            accent: "grey"
        },
        text: {
            primary: "#ffffffff",
            secondary: "#e3e2e2ff",
            darker: "#515151ff",
            accent: "#979797ff"
        }
    },
    display: displayType,
    width: width,
    height: height
});

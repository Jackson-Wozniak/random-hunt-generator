import { createTheme, type Theme } from "@mui/material/styles";
import "@mui/material/styles";

export const AppTheme = (displayType: 'desktop' | 'mobile' = 'desktop',
    width: number = 0, height: number = 0
): Theme => createTheme({
    palette : {
        primary: {
            main: "#0070c0",
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
            primary: "#000000",
            secondary: "#3d3d3d"
        }
    },
    display: displayType,
    width: width,
    height: height
});

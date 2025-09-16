import type React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

const ContentContainer: React.FC<{
    children?: React.ReactNode
}> = ({children}) => {
    const theme = useTheme();

    return (
        <Box width="100%" height="100%" boxSizing="content-box" 
            display="flex" flexDirection="column"
            sx={{backgroundColor: theme.palette.background.primary}}>
            {children}
            <IconButton sx={{width: "50px", height: "50px", position: "absolute", top: 0, right: 0, 
                zIndex: "2000", color: "#0d1117", backgroundColor: "transparent"}}
                component={Link}
                to="https://github.com/Jackson-Wozniak/woth-hunt-generator"
                target="_blank"
            ><GitHubIcon/></IconButton>
        </Box>
    )
}

export default ContentContainer;
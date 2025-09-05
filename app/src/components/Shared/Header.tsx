import { IconButton, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import type React from "react";

const GithubButton: React.FC = () => {
    const theme = useTheme();

    return (
        <Link to="https://github.com/Jackson-Wozniak/TheMentalMetric" target="_blank"
            style={{height: "100%", display: "flex", alignItems: "center", }}>
            <IconButton
                sx={{
                    margin: "0px 15px 0px 15px",
                    borderRadius: "5px",
                    border: "none",
                    boxShadow: `${theme.palette.text.secondary} 0px 0px 0px 1px`,
                    width: "auto",
                    height: "70%",
                    padding: "10px",
                }}
            ><GitHubIcon sx={{ height: "100%", width: "auto", color: "text.primary" }} /></IconButton>
        </Link>
    )
}

const Header: React.FC<{}> = ({}) => {
    const theme = useTheme();

    if(theme.display === 'mobile'){
        return (
            <Box width="100%" height="7%" sx={{backgroundColor: theme.palette.background.secondary}}
                display="flex" justifyContent="space-between" alignItems="center"
            >
                <Link to={"/"} style={{height: "100%"}}>
                    <img height="100%" style={{width: "auto"}}/>
                </Link>

                <Box display="flex" alignItems="center" gap={2} height="100%">
                    <GithubButton/>                   
                </Box>
            </Box>
        )
    }

    return (
        <Box width="100%" height="10%" sx={{backgroundColor: theme.palette.background.secondary}}
            display="flex" justifyContent="space-between" alignItems="center"
        >
            <Stack height="100%" direction="row" display="flex" justifyContent="space-evenly" gap={0}>
                <Link to={"/"} style={{height: "100%"}}>
                    <img height="100%" style={{objectFit: "contain"}}/>
                </Link>
            </Stack>
            <Box display="flex" alignItems="center" gap={2} height="100%">
                <GithubButton/>        
            </Box>
        </Box>
    )
}

export default Header;
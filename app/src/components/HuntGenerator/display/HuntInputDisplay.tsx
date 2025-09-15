import { Box, useTheme } from "@mui/material";
import { CenteredFullWindow } from "../../../theme/Shared";

const FormStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Open Sans', sans-serif",
    color: "rgb(14, 14, 14)",
    padding : "0px 30px 10px 30px",
    borderRadius: "5px",
    backgroundColor: "rgba(255,255,255,.1)",
    border: "1px solid rgba(255,255,255,.1)",
    backdropFilter: "blur(10px)",
    zIndex: "1000",
    width: "50%",
    height: "80%"
}

const HuntInputDisplay: React.FC<{}> = ({}) => {
    const theme = useTheme();

    return (
        <Box sx={FormStyling}>

        </Box>
    )
}

export default HuntInputDisplay;
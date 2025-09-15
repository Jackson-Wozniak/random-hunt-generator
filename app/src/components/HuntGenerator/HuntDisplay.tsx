import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { toHuntContextParams, type HuntParametersState } from "./hunt/HuntParametersDispatch";
import { generateHunt } from "../../engine/HuntEngine";
import type { Hunt } from "../../types/HuntTypes";
import InputDisplay from "./hunt/InputDisplay";
import OutputDisplay from "./hunt/OutputDisplay";

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

enum FormMode {
    INPUT_PARAMS = "Input Params",
    GENERATING = "Generating",
    DISPLAY_HUNT = "Display Hunt"
}

const HuntDisplay: React.FC<{}> = ({}) => {
    const theme = useTheme();

    const [formMode, setFormMode] = useState<FormMode>(FormMode.INPUT_PARAMS);
    const [generatedHunt, setGeneratedHunt] = useState<Hunt | undefined>();

    function handleInput(parametersState: HuntParametersState){
        setFormMode(FormMode.GENERATING);

        const parameters = toHuntContextParams(parametersState);

        const generatedHunt = generateHunt(parameters);

        setGeneratedHunt(generatedHunt);
        setFormMode(FormMode.DISPLAY_HUNT);
    }

    if(formMode == FormMode.GENERATING){
        return (
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: 2 }}>
                <CircularProgress />
                <Typography variant="h5" color={theme.palette.primary.contrastText}>Generating Unique Hunt...</Typography>
            </Box>
        )
    }

    if(formMode == FormMode.DISPLAY_HUNT && generatedHunt != undefined){
        return (
            <Box sx={FormStyling}>
                <OutputDisplay hunt={generatedHunt}/>
            </Box>
        )
    }

    return (
        <Box sx={FormStyling}>
            <InputDisplay handleSubmit={handleInput}/>
        </Box>
    )
}

export default HuntDisplay
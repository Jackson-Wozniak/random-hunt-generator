import { Box, CircularProgress, Dialog, DialogContent, DialogTitle, Paper, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import type { HuntParametersState } from "./hunt/HuntParametersDispatch";
import { generateHunt } from "../../engine/HuntEngine";
import type { Hunt } from "../../types/HuntTypes";
import InputDisplay from "./hunt/InputDisplay";
import OutputDisplay from "./hunt/OutputDisplay";
import { MapName } from "../../types/entities/Map";

const FormStyling = {
    display: "flex", justifyContent: "center", alignItems: "center",
    fontFamily: "'Open Sans', sans-serif", color: "rgb(14, 14, 14)",
    borderRadius: "5px", backdropFilter: "blur(10px)",
    backgroundColor: "rgba(166, 166, 166, 0.2)", border: "1px solid rgba(147, 147, 147, 0.2)",
    padding: 0, margin: 0
}

enum FormMode {
    INPUT_PARAMS = "Input Params",
    GENERATING = "Generating",
    DISPLAY_HUNT = "Display Hunt"
}

const HuntDisplay: React.FC<{setBackgroundUrl: (b: MapName) => void}> = ({setBackgroundUrl}) => {
    const theme = useTheme();

    const [formMode, setFormMode] = useState<FormMode>(FormMode.INPUT_PARAMS);
    const [generatedHunt, setGeneratedHunt] = useState<Hunt | undefined>();

    function handleInput(parameters: HuntParametersState){
        setFormMode(FormMode.GENERATING);

        const generatedHunt = generateHunt(parameters);

        setBackgroundUrl(generatedHunt.map.name);

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
            <Dialog fullWidth={true} maxWidth={"md"} open={true} slotProps={{paper: {style: FormStyling}}}>
                <DialogTitle variant="h4" sx={{color: theme.palette.primary.contrastText}}>Assigned Hunt</DialogTitle>
                <DialogContent sx={{ m: 0, p: 0, width: "100%", overflowY: "auto", maxHeight: "90vh", "& .MuiFormControl-root": { mt: 1 }}}>
                    <OutputDisplay hunt={generatedHunt}/>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Dialog fullWidth={true} maxWidth={"sm"} open={true} slotProps={{paper: {style: FormStyling}}}>
            <DialogTitle variant="h4" sx={{color: theme.palette.primary.contrastText}}>Generate New Hunt</DialogTitle>
            <DialogContent sx={{ pt: 3, "& .MuiFormControl-root": { mt: 1 }}}>
                <InputDisplay handleSubmit={handleInput}/>
            </DialogContent>
        </Dialog>
    )
}

export default HuntDisplay
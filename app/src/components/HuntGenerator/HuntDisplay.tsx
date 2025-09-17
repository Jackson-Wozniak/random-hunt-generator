import { Box, CircularProgress, Dialog, DialogContent, DialogTitle, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import type { HuntParametersState } from "./hunt/HuntParametersDispatch";
import { generateHunt } from "../../engine/HuntEngine";
import type { Hunt } from "../../types/HuntTypes";
import InputDisplay from "./hunt/InputDisplay";
import OutputDisplay from "./hunt/OutputDisplay";
import { MapName } from "../../types/entities/Map";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

const FormStyling = {
    display: "flex", justifyContent: "center", alignItems: "center",
    fontFamily: "'Open Sans', sans-serif", color: "rgb(14, 14, 14)",
    borderRadius: "5px", backdropFilter: "blur(10px)",
    backgroundColor: "rgba(166, 166, 166, 0.2)", border: "1px solid rgba(147, 147, 147, 0.2)",
    padding: 0, margin: 0, boxSizing: "border-box"
}

enum FormMode {
    INPUT_PARAMS = "Input Params",
    GENERATING = "Generating",
    DISPLAY_HUNT = "Display Hunt"
}

const HuntDisplay: React.FC<{setBackgroundUrl: (b: MapName | undefined) => void}> = ({setBackgroundUrl}) => {
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

    function handleClose(){
        setFormMode(FormMode.INPUT_PARAMS);
        setBackgroundUrl(undefined);
        setGeneratedHunt(undefined);
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
            <Dialog fullWidth={true} maxWidth={"md"} open={true} slotProps={{paper: {sx: FormStyling}}}>
                <DialogTitle display="flex" alignItems="center" justifyContent="center"
                    sx={{ p: 0, m: "15px 0px 15px 0px", position: "relative", width: "100%" }}>
                    <IconButton onClick={handleClose}
                        sx={{
                            position: "absolute", left: 8, color: theme.palette.text.primary
                        }}
                    ><ArrowBackIcon fontSize="large"/></IconButton>
                    <Typography variant="h4" component="span" sx={{color: theme.palette.primary.contrastText}}>Assigned Hunt</Typography>
                </DialogTitle>
                <DialogContent sx={{ m: 0, p: 0, width: "100%", overflowY: "auto", maxHeight: "90vh", "& .MuiFormControl-root": { mt: 1 }}}>
                    <OutputDisplay hunt={generatedHunt}/>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <>
            <IconButton sx={{width: "50px", height: "50px", position: "absolute", top: 0, right: 0, 
                zIndex: "2000", color: "#0d1117", backgroundColor: "transparent"}}
                component={Link}
                to="https://github.com/Jackson-Wozniak/woth-hunt-generator"
                target="_blank"
            ><GitHubIcon/></IconButton>
            <Dialog fullWidth={true} maxWidth={"sm"} open={true} slotProps={{paper: {sx: FormStyling}}}>
                <DialogTitle variant="h4" sx={{color: theme.palette.primary.contrastText}}>Generate New Hunt</DialogTitle>
                <DialogContent sx={{ pt: 3, "& .MuiFormControl-root": { mt: 1 }}}>
                    <InputDisplay handleSubmit={handleInput}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default HuntDisplay
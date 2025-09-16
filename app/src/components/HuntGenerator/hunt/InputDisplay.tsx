import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Slider, TextField, ToggleButton, ToggleButtonGroup, useTheme } from "@mui/material";
import { CenteredFullWindow } from "../../../theme/Shared";
import { HuntParametersReducer, HuntType, InitialHuntParametersState, type HuntParametersState } from "./HuntParametersDispatch";
import { useReducer } from "react";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SearchIcon from '@mui/icons-material/Search';

const InputDisplay: React.FC<{handleSubmit: (state: HuntParametersState) => void}> = ({handleSubmit}) => {
    const theme = useTheme();

    const [huntParametersState, HuntParametersDispatch] = useReducer(HuntParametersReducer, InitialHuntParametersState)

    function handleCreate(){
        handleSubmit(huntParametersState);
    }

    /*
    OPTIONAL INPUTS:
        - story-based hunt? (if no, only output region, if yes include animal target and time/rules)
        - include DLC?
        - include private pass regions?
        - min hunting tier?
    */
    return (
        <Box sx={CenteredFullWindow("column")}>
            <Box height="90%" width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" color={theme.palette.text.secondary}>              
                <FormGroup sx={{display: "flex", flexDirection: "column", margin: "10px 0px", "& > *": { marginBottom: 2 },}}>
                    <FormControl fullWidth variant="outlined" focused={false}>
                        <InputLabel id="hunt-type-label">Hunt Type</InputLabel>
                        <Select
                            IconComponent={(props) => <SearchIcon {...props} />}
                            sx={{
                                paddingRight: "10px", marginBottom: "15px",
                                "& .MuiSelect-icon": {
                                    transform: "none !important", transition: "none !important", 
                                    pointerEvents: "none", color: theme.palette.text.secondary
                                }
                            }}
                            labelId="hunt-type-label"
                            value={huntParametersState.huntType}
                            label="Hunt Type"
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        color: "black",
                                        backgroundColor: "rgba(184, 184, 184, 0.5)",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(162, 162, 162, 0.5)",
                                        borderRadius: "8px",
                                    },
                                },
                            }}
                            input={<OutlinedInput label="Hunt Type" />}
                            onChange={(e) => HuntParametersDispatch({type: "OnChangeHuntType", payload: e.target.value})}
                        >
                            <MenuItem value={HuntType.SIMPLE}>{HuntType.SIMPLE}</MenuItem>
                            <MenuItem value={HuntType.TARGET_SPECIES}>{HuntType.TARGET_SPECIES}</MenuItem>
                            <MenuItem value={HuntType.STORY_BASED}>{HuntType.STORY_BASED}</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox checked={huntParametersState.includeDLC}
                            onChange={() => HuntParametersDispatch({type: "OnSwitchIncludeDLC"})}/>}
                        label="Include DLC Maps"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={huntParametersState.includePrivatePasses} 
                            onChange={() => HuntParametersDispatch({type: "OnSwitchIncludePrivatePasses"})}/>}
                        label="Include Private Pass Regions"
                    />
                    <FormControl component="fieldset" sx={{width: "100%"}}>
                        <FormLabel component="legend">Minimum Hunting Tier</FormLabel>
                        <ToggleButtonGroup
                            value={huntParametersState.minHuntingTier} exclusive
                            sx={{
                                display: "flex", justifyContent: "space-between", width: "100%"
                            }}
                            onChange={(_, val) => 
                                HuntParametersDispatch({type: "OnChangeMinHuntingTier", payload: val})}
                        >
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <ToggleButton fullWidth={true} sx={{fontSize: "1.15rem"}} 
                                    key={num} value={num}
                                    selected={huntParametersState.minHuntingTier != null &&
                                        num <= huntParametersState.minHuntingTier}
                                >{num}</ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </FormControl>
                </FormGroup>
            </Box>
            <Box height="10%" width="100%" display="flex" alignItems="center" justifyContent="center" mt="25px">
                <Button variant="contained" onClick={handleCreate}
                    endIcon={<DoubleArrowIcon/>}>Create Hunt</Button>
            </Box>
        </Box>
    )
}

export default InputDisplay;
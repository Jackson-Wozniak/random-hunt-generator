import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, OutlinedInput, Select, ToggleButton, ToggleButtonGroup, useTheme } from "@mui/material";
import { CenteredFullWindow } from "../../../theme/Shared";
import { GameType, HuntParametersReducer, HuntType, InitialHuntParametersState, type HuntParametersState } from "./HuntParametersDispatch";
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
                            <MenuItem value={HuntType.OPEN_HUNT}>{HuntType.OPEN_HUNT}</MenuItem>
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
                    <FormControl component="fieldset" sx={{ width: "100%" }}>
                        <FormLabel component="legend">Included Targets</FormLabel>
                        <ToggleButtonGroup
                          value={huntParametersState.gameType}
                          exclusive
                          fullWidth
                          onChange={(_, val) =>
                            HuntParametersDispatch({ type: "OnChangeGameType", payload: val })
                          }
                        >
                          {Object.values(GameType).map((type, index) => (
                            <ToggleButton key={index} value={type} sx={{ fontSize: "1.15rem" }}>
                              {type}
                            </ToggleButton>
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
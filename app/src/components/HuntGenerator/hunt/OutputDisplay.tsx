import { Box, TextField, useTheme } from "@mui/material";
import { CenteredFullWindow } from "../../../theme/Shared";
import type { Hunt } from "../../../types/HuntTypes";
import ForestIcon from '@mui/icons-material/Forest';
import PetsIcon from '@mui/icons-material/Pets';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import GavelIcon from '@mui/icons-material/Gavel';

const OutputDisplay: React.FC<{hunt: Hunt}> = ({hunt}) => {
    const theme = useTheme();

    return (
        <Box sx={CenteredFullWindow("column")}>
            <TextField
                sx={{marginBottom: "10px"}}
                label="Location"
                value={hunt.region.name + ", " + hunt.map.name}
                slotProps={{
                    input: {
                        readOnly: true, endAdornment: <ForestIcon/>,
                        sx: { width: `${(hunt.region.name + ", " + hunt.map.name).length + 4}ch`}
                    } 
                }}
            />
            <TextField
                sx={{marginBottom: "10px"}}
                multiline maxRows={50}
                label={hunt.species.length > 1 ? "Available Species" : "Target Species"}
                value={hunt.species.map(s => s.name).join("\n")}
                slotProps={{
                    input: {
                        readOnly: true, endAdornment: <PetsIcon/>
                    } 
                }}
            />
            {hunt.rules && (
                <TextField
                    sx={{marginBottom: "10px"}}
                    label={"Time of Day"}
                    value={hunt.rules.timeOfDay}
                    slotProps={{
                        input: {
                            readOnly: true, endAdornment: <AccessTimeIcon/>
                        } 
                    }}
                />
            )}
            {hunt.story && (
                <TextField
                    multiline maxRows={50}
                    sx={{marginBottom: "10px"}}
                    label="Backstory"
                    value={hunt.story.backstory}
                    slotProps={{
                        input: {
                            readOnly: true, endAdornment: <MenuBookIcon/>
                        } 
                    }}
                />
            )}
            {hunt.story && (
                <TextField
                    multiline maxRows={50}
                    sx={{marginBottom: "10px"}}
                    label={"Assignment"}
                    value={hunt.story.assignment}
                    slotProps={{
                        input: {
                            readOnly: true, endAdornment: <WorkIcon/>
                        } 
                    }}
                />
            )}
            {hunt.rules && (
                <TextField
                    multiline maxRows={50}
                    sx={{marginBottom: "10px"}}
                    label="Rules"
                    value={hunt.rules.restriction}
                    slotProps={{
                        input: {
                            readOnly: true, endAdornment: <GavelIcon/>
                        } 
                    }}
                />
            )}
        </Box>
    )
}

export default OutputDisplay;
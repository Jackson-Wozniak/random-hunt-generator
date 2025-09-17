import { Box, TextField } from "@mui/material";
import { CenteredFullWindow } from "../../../theme/Shared";
import type { Hunt } from "../../../types/HuntTypes";
import ForestIcon from '@mui/icons-material/Forest';
import PetsIcon from '@mui/icons-material/Pets';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import GavelIcon from '@mui/icons-material/Gavel';

const OutputDisplay: React.FC<{hunt: Hunt}> = ({hunt}) => {

    return (
        <Box sx={CenteredFullWindow("column")}>
            <TextField
                multiline maxRows={2}
                sx={{marginBottom: "20px", width: "75%"}}
                label="Location"
                value={hunt.region.name + ", " + hunt.map.name}
                slotProps={{
                    input: {
                        readOnly: true, endAdornment: <ForestIcon/>
                    } 
                }}
            />
            <TextField
                sx={{marginBottom: "20px", width: "75%"}}
                multiline maxRows={50}
                label={hunt.species.length > 1 ? "Available Species" : "Target Species"}
                value={hunt.species.map(s => s.name).join("\n")}
                slotProps={{
                    input: {
                        readOnly: true, endAdornment: <PetsIcon/>
                    } 
                }}
            />
            {hunt.story && (
                <TextField
                    multiline maxRows={50}
                    sx={{marginBottom: "20px", width: "75%"}}
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
                    sx={{marginBottom: "20px", width: "75%"}}
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
                    sx={{marginBottom: "20px", width: "75%"}}
                    label={"Time of Day"}
                    value={hunt.rules.timeOfDay}
                    slotProps={{
                        input: {
                            readOnly: true, endAdornment: <AccessTimeIcon/>
                        } 
                    }}
                />
            )}
            {hunt.rules && (
                <TextField
                    multiline maxRows={50}
                    sx={{marginBottom: "20px", width: "75%"}}
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
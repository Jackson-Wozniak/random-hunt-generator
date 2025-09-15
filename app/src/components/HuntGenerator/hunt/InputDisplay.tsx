import { Box, Button, useTheme } from "@mui/material";
import { CenteredFullWindow } from "../../../theme/Shared";
import { HuntParametersReducer, InitialHuntParametersState, type HuntParametersState } from "./HuntParametersDispatch";
import { useReducer } from "react";

const InputDisplay: React.FC<{handleSubmit: (state: HuntParametersState) => void}> = ({handleSubmit}) => {
    const theme = useTheme();

    const [huntParametersState, HuntParametersDispatch] = useReducer(HuntParametersReducer, InitialHuntParametersState)

    return (
        <Box>
            <Button variant="contained">Create</Button>
        </Box>
    )
}

export default InputDisplay;
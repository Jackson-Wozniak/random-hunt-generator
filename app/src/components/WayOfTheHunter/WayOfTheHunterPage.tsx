import { useTheme } from "@mui/material/styles";
import ContentContainer from "../Shared/ContentContainer";
import './temp.css';
import Box from "@mui/material/Box";
import { CenteredFullWindow } from "../../theme/Shared";
import HuntSettingsWindow from "./HuntSettingsWindow";

const WayOfTheHunterPage: React.FC<{}> = ({}) => {
    const theme = useTheme();

    return (
        <ContentContainer>
            <Box className="App">
                <HuntSettingsWindow/>
            </Box>
        </ContentContainer>
    )
}

export default WayOfTheHunterPage;
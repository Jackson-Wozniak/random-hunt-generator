import { useTheme } from "@mui/material/styles";
import ContentContainer from "../Shared/ContentContainer";
import './temp.css';
import Box from "@mui/material/Box";
import HuntDisplay from "./HuntDisplay";

const HunteGeneratorPage: React.FC<{}> = ({}) => {
    const theme = useTheme();

    return (
        <ContentContainer>
            <Box className="App">
                <HuntDisplay/>
            </Box>
        </ContentContainer>
    )
}

export default HunteGeneratorPage;
import { useTheme } from "@mui/material/styles";
import ContentContainer from "../Shared/ContentContainer";
import './temp.css';
import Box from "@mui/material/Box";
import HuntInputDisplay from "./display/HuntInputDisplay";

const HunteGeneratorPage: React.FC<{}> = ({}) => {
    const theme = useTheme();

    return (
        <ContentContainer>
            <Box className="App">
                <HuntInputDisplay/>
            </Box>
        </ContentContainer>
    )
}

export default HunteGeneratorPage;
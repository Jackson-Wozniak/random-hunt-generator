import ContentContainer from "../Shared/ContentContainer";
import Box from "@mui/material/Box";
import HuntDisplay from "./HuntDisplay";
import { useState } from "react";
import { MapName } from "../../types/entities/Map";
import NezPerceImage from '../../assets/backgrounds/NezPerce.png';
import TransylvaniaImage from '../../assets/backgrounds/Transylvania.png';
import AuroraShoresImage from '../../assets/backgrounds/AuroraShores.png';
import TikamoonPlainsImage from '../../assets/backgrounds/TikamoonPlains.png';
import LintukotoReserveImage from '../../assets/backgrounds/LintukotoReserve.png';
import MatarikiParkImage from '../../assets/backgrounds/MatarikiPark.png';
import LogoImage from '../../assets/backgrounds/logo.png';

const HunteGeneratorPage: React.FC<{}> = ({}) => {

    const [backgroundUrl, setBackgroundUrl] = useState<string>(LogoImage);

    const Styling = () => { return {
        textAlign: "center",
        p: 0,
        m: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${backgroundUrl}) no-repeat center center fixed`,
        backgroundSize: "cover",
    }}

    function toBackgroundUrl(name: MapName | undefined){
        if(name == null) setBackgroundUrl(LogoImage);

        switch(name){
            case MapName.NEZ_PERCE: {
                setBackgroundUrl(NezPerceImage);
                return;
            }
            case MapName.TRANSYLVANIA: {
                setBackgroundUrl(TransylvaniaImage);
                return;
            }
            case MapName.AURORA_SHORES: {
                setBackgroundUrl(AuroraShoresImage);
                return;
            }
            case MapName.TIKAMOON_PLAINS: {
                setBackgroundUrl(TikamoonPlainsImage);
                return;
            }
            case MapName.LINTUKOTO_RESERVE: {
                setBackgroundUrl(LintukotoReserveImage);
                return;
            }
            case MapName.MATARIKI_PARK: {
                setBackgroundUrl(MatarikiParkImage);
                return;
            }
        }
    }

    return (
        <ContentContainer>
            <Box sx={Styling()}>
                <HuntDisplay setBackgroundUrl={toBackgroundUrl}/>
            </Box>
        </ContentContainer>
    )
}

export default HunteGeneratorPage;
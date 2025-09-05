import { Box } from '@mui/material';
import Header from './Header';

const Page: React.FC<{
    component: React.ReactNode,
}> = ({component}) => {

    return (
        <Box width="100%" height="100%" overflow="hidden">
            {component}
        </Box>
    )
}

export default Page;
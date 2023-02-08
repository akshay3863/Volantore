import React from 'react';
import {styled} from "@mui/material/styles";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const MainStyle = styled("div")(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: APP_BAR_MOBILE,
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up("lg")]: {
        paddingTop: APP_BAR_DESKTOP,
    },
}));

const LayoutContent = ({ element: ReactComponent }) => {
    return (
        <MainStyle>
            <ReactComponent />
        </MainStyle>
    );
};

export default LayoutContent;

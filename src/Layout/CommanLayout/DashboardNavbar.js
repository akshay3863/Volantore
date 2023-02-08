import PropTypes from "prop-types";
import {styled} from "@mui/material/styles";
import {AppBar, Badge, Box, Button, IconButton, Stack, Toolbar} from "@mui/material";
import React from "react";
import {AiOutlineMenu} from 'react-icons/ai';
import {useNavigate} from "react-router-dom";
// ----------------------------------------------------------------------//

const DRAWER_WIDTH = 273;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({theme}) => ({
    boxShadow: "none",
    backgroundColor: "white",
    borderBottom: "1.10802px solid #C4C4C4",
    [theme.breakpoints.up("lg")]: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
}));

const ToolbarStyle = styled(Toolbar)(({theme}) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up("lg")]: {
        minHeight: APPBAR_DESKTOP,
        padding: "0 33px",
    }
}));

// ----------------------------------------------------------------------//

DashboardNavbar.propTypes = {
    onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({onOpenSidebar}) {
    let navigate = useNavigate();
    return (
        <RootStyle>
            <ToolbarStyle>
                <IconButton
                    onClick={onOpenSidebar}
                    sx={{mr: 1, color: "text.primary", display: {lg: "none"}}}
                > <AiOutlineMenu/>
                </IconButton>
                <Box sx={{flexGrow: 1}}/>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{xs: 0.5, sm: 1.5}}
                >
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{padding: "15px 20px"}}
                        onClick={() => navigate('/dashboard/new-scan')}
                    > Add Patient
                    </Button>
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    );
}

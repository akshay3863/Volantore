import React from 'react';
import {Grid, styled} from "@mui/material";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const StyledImage = styled(Grid)(({theme}) => ({
    "& img": {
        height: '100vh',
        width: "100%",
    }
}));

const AuthPage = () => {
    return (
        <Grid
            container
            component="main"
            sx={{height: 'calc(100vh - 1px)', overflow: "hidden"}}
        >
            <StyledImage
                item
                md={5}
                sx={{display: {xs: "none", md: "block"}}}
            >
                <img
                    src="/assets/images/backgroundLogin.jpg"
                    alt="backgroundLogin"
                    style={{objectFit:"contain",objectPosition:"left"}}
                />
            </StyledImage>
            <Grid
                item
                xs={12}
                md={7}
                sx={{
                    height: "calc(100vh - 0px)",
                    padding: {xs: "10px 20px", md: "20px 0"},
                    overflowY: "auto",
                    background:"white"
                }}
                display="flex"
            >
            {window.location.pathname === "/signup"
                ? <SignupForm/>
                : <LoginForm/>
             }
            </Grid>
        </Grid>
    );
};

export default AuthPage;

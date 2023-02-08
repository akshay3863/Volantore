import React from 'react';
import {Button, Grid, Stack, styled, Tab, Tabs, Typography} from "@mui/material";
import Form from "components/Form";
import Field from "components/Field";
import {useNavigate} from "react-router-dom";
import {signup} from "store/actions/auth";
import {useDispatch} from "react-redux";

const NavigationTab = styled(Tab)(({theme}) => ({
    color: "secondary.main",
    fontWeight: 700
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    opacity: "0.5",
    ":before, :after": {
        content: `""`,
        width: '30%',
        height: '2px',
        background: '#D6DDEB'
    },
    ":before": {
        margin: "0 20px 0 0",
    },
    ":after": {
        margin: "0 0 0 20px",
    }
}))

const SignupForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        tab: "1",
    });

    const onChangeTabHandler = (e, newValue) => {
        setState((prevState) => ({...prevState, tab: newValue}));
    }
    return (
        <>
            <Grid
                item
                lg={7}
                md={12}
                sx={{
                    width: "100%",
                    margin: "auto",
                    display: "flex"
                }}
            >
                <Stack
                    sx={{width: "100%"}}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Form
                        onSubmit={(values)=> {
                            dispatch(signup(values))
                        }}
                    >
                        <Field
                            type="text"
                            name="full_name"
                            label="Full name"
                            placeholder="Enter your full name"
                            validation={['required']}
                            sx={{
                                "& .MuiInputBase-input": {
                                    padding: "12px 16px"
                                }
                            }}
                        />
                        <Field
                            type="email"
                            name="email"
                            label="Email Address"
                            placeholder="Enter email address"
                            validation={['required']}
                            sx={{
                                "& .MuiInputBase-input": {
                                    padding: "12px 16px"
                                }
                            }}
                        />
                        <Field
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Enter password"
                            validation={['required']}
                            sx={{
                                "& .MuiInputBase-input": {
                                    padding: "12px 16px"
                                }
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{padding: "12px 24px", fontWeight: 600}}
                            type="submit"
                        > Sign up
                        </Button>
                    </Form>
                    <Stack sx={{my: 2, width: "100%", color: "grey.0", fontSize: "15px"}} direction="row">
                        Already have an account?
                        <Typography
                            component="span"
                            sx={{ml: 1, color: "primary.main", cursor: "pointer"}}
                            onClick={() => navigate("/")}
                            fontFamily="Inter"
                            fontWeight="600"
                            fontSize="15px"
                        > Login
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>
        </>
    );
};

export default SignupForm;

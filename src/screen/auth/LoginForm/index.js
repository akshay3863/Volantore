import React from 'react';
import {
    Grid,
    Stack, 
    Typography
} from "@mui/material";
import Form from "../../../components/Form";
import Field from "../../../components/Field";
import {useNavigate} from "react-router-dom";
import {login} from "../../../store/actions/auth";
import {connect} from "react-redux";
import SubmitButton from "../../../components/SubmitButton";

const LoginForm = (props) => {
    const navigate = useNavigate();
    const [state,setState] = React.useState({
        tab:"1",
        forgetModel:false,
    });

    const toggleForgetModel = () => {
        setState((prevState)=>({...prevState,forgetModel:!prevState.forgetModel}));
    }

    return (
        <>
            <Grid
                item
                lg={7}
                md={12}
                sx={{
                    width:"100%",
                    margin:"auto",
                    display:"flex",
                }}
            >
                <Stack
                    sx={{ width:"100%" }}
                    display="flex"
                    alignItems="center"
                >

                    <Form onSubmit={props.login}>
                        <Field
                            type="text"
                            name="email"
                            label="Email Address"
                            placeholder="Enter email address"
                            validation={["required"]}
                             sx={{
                                "& .MuiInputBase-input": {
                                    padding:"12px 16px"
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
                                    padding:"12px 16px"
                                }
                            }}
                        />
                        <Typography
                            component="span"
                            sx={{color:"primary.main",fontWeight:400,fontSize:"12px",cursor:"pointer"}}
                            onClick={toggleForgetModel}
                        > Forgot password
                        </Typography>
                        <SubmitButton
                            variant="contained"
                            sx={{padding:"12px 24px",fontWeight:600}}
                            type="submit"
                            submitting={props.isSubmitting}
                            label="Login"
                        />
                    </Form>
                    <Stack sx={{my:2,width:"100%",color:"grey.0",fontSize:"15px"}} direction="row">
                        Don’t have an account?
                            <Typography
                                component="span"
                                sx={{
                                    ml:1,
                                    color:"primary.main",
                                    fontWeight:600,
                                    fontSize:"15px",
                                    cursor:"pointer"
                                }}
                                fontFamily="Inter"
                                onClick={()=>navigate("/signup")}
                            > Sign Up
                            </Typography>
                    </Stack>
                </Stack>
            </Grid>
        </>
    );
};

const mapStateToProps = (state) => {
  return {
      isSubmitting:state.auth.isSubmitting
  }
}
export default connect(mapStateToProps,{
    login
})(LoginForm);

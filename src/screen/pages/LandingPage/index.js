import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch} from "react-redux";
import CustomHTMLTable from "../../../components/LandingPage/CustomHtmlTable";

const LandingPage = () => {
    const dispatch = useDispatch();
    return (
        <Container maxWidth="xxl">
            <Typography
                fontFamily="Comfortaa"
                fontSize="30px"
                fontWeight={600}
                lineHeight="33px"
                mb={1}
            > List Of Request
            </Typography>
            <CustomHTMLTable/>
        </Container>
    );
};

export default LandingPage;

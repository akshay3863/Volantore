import React from 'react';
import {Button, CircularProgress} from "@mui/material";
import PropTypes from 'prop-types'

const SubmitButton = (props) => {
    const {label, sx, variant, submitting} = props;
    return (
        <Button
            variant={variant}
            sx={{...sx, border: submitting ? "none" : ""}}
            type="submit"
            disabled={submitting}
        >   {label}
            {submitting && (
                <CircularProgress
                    color="inherit"
                    style={{height: "20px", width: "20px", marginLeft: "10px"}}
                />
            )}
        </Button>
    );
};

SubmitButton.propTypes = {
    submitting:PropTypes.bool,
    disabled:PropTypes.bool,
    label:PropTypes.string,
    variant:PropTypes.string,
    sx:PropTypes.object,
}
export default SubmitButton;

import React from 'react';

const CheckBox = (theme) => {
    return {
        MuiCheckbox: {
            "&:not($checked)": {
                background:"red"
            },
        },
    };
};

export default CheckBox;

import React from 'react';
import {Toaster} from "react-hot-toast";

const Toast = () => {
    return (
        <Toaster
            position="bottom-center"
            reverseOrder={false}
            gutter={2}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                // Define default options
                className: '',
                duration: 1500,

                // Default options for specific types
                success: {
                    duration: 2000,
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                },
            }}
        />
    );
};

export default Toast;

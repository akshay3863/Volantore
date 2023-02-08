import React, {useState} from 'react';
import {
    NavLink as RouterLink,
    useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import {
    Box,
    List,
    Collapse,
    ListItemText,
    ListItemIcon,
    ListItemButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {adminConfig} from "./CommanLayout/NavConfig";


const ListItemStyle = styled((props) => (
    <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: "relative",
    textTransform: "capitalize",
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
    width: 22,
    height: 22,
    color: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
// ----------------------------------------------------------------------

NavItem.propTypes = {
    item: PropTypes.object,
    active: PropTypes.func,
};

function NavItemLabel(props) {
    return (
        <ListItemText
            disableTypography
            primary={props.title}
            sx={{
                textTransform:"uppercase",
                padding:"10px 20px",
                color: "#7A7A7A",
                fontWeight:600,
                mt:3, mb:1
            }}
        />
    )
}
function NavItem({ item, active }) {
    const isActiveRoot = active(item.references);
    const { title, path, icon, info, children } = item;
    const [open, setOpen] = useState(isActiveRoot);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const activeRootStyle = {
        color: "primary.main",
        fontWeight: "fontWeightMedium",
        background: "#E9EBFD",
        "&:before":{
            content:'""',
            top:"50%",
            left: "-15px",
            width: "4px",
            height: 32,
            position: "absolute",
            transform:"translateY(-50%)",
            background: "#4640DE",
        }
    };

    if (item.headerLabel){
        return (
            <NavItemLabel title={item.headerLabel} />
        )
    }

    if (children) {
        return (
            <>
                <ListItemStyle
                    onClick={handleOpen}
                    sx={{
                        height: "5rem",
                        fontWeight:500,
                            ...(isActiveRoot && activeRootStyle),
                    }}
                >
                    <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
                    <ListItemText disableTypography primary={title} />
                    {info && info}
                </ListItemStyle>
                <Box sx={{ width: "90%", borderBottom: "1px solid #C9C9C9"}}/>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {children.map((item, idx) => {
                            const { title, path } = item;
                            const isActiveSub = active(path);

                            return (
                                <ListItemStyle key={idx} component={RouterLink} to={path}>
                                    <ListItemIconStyle>
                                        <Box
                                            component="span"
                                            sx={{
                                                width: 4,
                                                height: 4,
                                                display: "flex",
                                                borderRadius: "50%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                bgcolor: "text.disabled",
                                                transition: (theme) =>
                                                    theme.transitions.create("transform"),
                                                ...(isActiveSub && {
                                                    transform: "scale(2)",
                                                    bgcolor: "primary.main",
                                                }),
                                            }}
                                        />
                                    </ListItemIconStyle>
                                    <ListItemText disableTypography sx={{fontSize:"16px"}} primary={title} />
                                </ListItemStyle>
                            );
                        })}
                    </List>
                    <Box
                        sx={{
                            width: "90%",
                            borderBottom: "1px solid #C9C9C9",
                        }}
                    />
                </Collapse>
            </>
        );
    }

    return (
        <ListItemStyle
            component={RouterLink}
            to={path}
            sx={{
                height: "3rem",
                position:"relative",
                ...(isActiveRoot && activeRootStyle),
            }}
        >
            <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
            <ListItemText disableTypography primary={title} />
            {info && info}
        </ListItemStyle>
    );
}

const NavSection = () => {
    const { pathname } = useLocation();
    const match = (path) => path ? !!path.includes(pathname) : false;

    return (
        <Box>
            <List disablePadding sx={{ p: 1,mt:2,pl:2 }}>
                {adminConfig.map((item, idx) => (
                    <NavItem key={idx} item={item} active={match} />
                ))}
            </List>
        </Box>
    );
};

export default NavSection;

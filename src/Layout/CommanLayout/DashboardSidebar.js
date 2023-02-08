import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Drawer, Typography, Stack, Avatar } from "@mui/material";
import useResponsive from "../../utils/hooks/useResponsive";
import Scrollbar from "../../utils/Scrollbar";
import NavSection from "../NavItems";
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 272;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <>
      <Scrollbar
        sx={{
          height: "100vh",
          "& .simplebar-content": {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "primary.main" }}
          >
            Volunteer Clinic App
          </Typography>
        </Box>
        <NavSection />
      </Scrollbar>
    </>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              background: "white",
              backgroundImage: "url(./assets/images/sidebar.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              background: "#9ab9ff1a",
              borderRight: "1px solid rgba(138, 143, 157, 0.5)",
              height: "auto",
              backgroundRepeat: "no-repeat",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}

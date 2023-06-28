/* eslint-disable no-unused-vars */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Container from "@mui/material/Container";
// Author page sections
// import Profile from "pages/LandingPages/Author/sections/Profile";
// import Posts from "pages/LandingPages/Author/sections/Posts";
import Form from "pages/LandingPages/Author/sections/Form";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/PRIVATE_ACC_pexels-gustavo-fring-3984880.jpg";

function Author() {
  return (
    <>
      <DefaultNavbar routes={routes} dark />
      <MKBox
        minHeight="80vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Video Arsenal{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Unleash Your Creativity with Our Animated Clips Web UI
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              For our private customers extremely easy to put you video together!
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Form />
      ;
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default Author;

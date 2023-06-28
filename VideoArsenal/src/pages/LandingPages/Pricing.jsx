/* eslint-disable no-unused-vars */

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useState } from "react";
import Forms from "./Forms";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Form from "pages/LandingPages/Author/sections/Form";
// @mui material components

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import bgImage from "assets/images/BUSINESS_ACC_pexels-lÃª-minh-3062541.jpg";
export default function Pricing() {
  const tiers = [
    {
      title: "Single video",
      subheader: "Starting from",
      price: "205",
      description: ["up to 5 min video", "Fully customizable", "Video in 24-48h", "Email support"],
      buttonText: "Select",
      buttonVariant: "outlined",
      value: "Single",
    },
    {
      title: "Yearly",
      subheader: "Professinal option",
      price: "15000",
      description: ["up to 5 min video", "Fully customizable", "Video in 24-48h", "Email support"],
      buttonText: "Select",
      buttonVariant: "outlined",
      value: "Yearly",
    },
    {
      title: "Monthly",
      subheader: "Professinal option",
      price: "2000",
      description: ["up to 5 min video", "Fully customizable", "Video in 24-48h", "Email support"],
      buttonText: "Select",
      buttonVariant: "outlined",
      value: "Monthly",
    },
  ];

  const defaultTheme = createTheme();

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const [selectedPackage, setSelectedPackage] = useState("");

  const handlePackageSelection = (packageValue) => {
    setSelectedPackage(packageValue);

    if (packageValue === "Monthly" || packageValue === "Yearly") {
      handlePopupOpen();
    } else if (packageValue === "Single") {
      handlePopupClose();
    }
  };

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
      ></MKBox>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
        <CssBaseline />
        {/* Hero unit */}
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: "50px", pb: 6 }}>
          <br />
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            Business customer
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p">
            Quickly build an effective video for your potential customers with this form. First
            select your package. For Single videos you can use our calculator. For monthly and
            yearly options leave your contact! If you need help choosing{"."} <br />
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === "Enterprise" ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography component="h2" variant="h3" color="text.primary">
                        €{tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary"></Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="error"
                      onClick={() => handlePackageSelection(tier.value)}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <br />
            {showPopup && <Forms onClose={handlePopupClose} selectedPackage={selectedPackage} />}
          </Box>
        </Container>
        <br />
      </ThemeProvider>
      {selectedPackage === "Single" && <Form selectedPackage={selectedPackage} />}
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

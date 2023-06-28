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
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useState } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Form from "pages/LandingPages/Author/sections/Form";
// @mui material components

// Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";
export default function Packages() {
  const tiers = [
    {
      title: "Single video",
      price: "1000",
      description: ["up to 5 min video", "Fully customizable", "Video in 24-48h", "Email support"],
      buttonText: "Select",
      buttonVariant: "outlined",
      value: "Once",
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
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
        <CssBaseline />
        {/* Hero unit */}
        {/* <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <br />
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            Business customer
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p">
            Quickly build an effective video for your potential customers with this form. First
            select your package. If you need help choosing{"."} <br />
            <Button onClick={handlePopupOpen} variant="outlined">
              Book consultation
            </Button>
            {showPopup && <Forms onClose={handlePopupClose} />}
          </Typography>
        </Container> */}
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
                      href="/business"
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
        </Container>
        <br />
      </ThemeProvider>
    </>
  );
}

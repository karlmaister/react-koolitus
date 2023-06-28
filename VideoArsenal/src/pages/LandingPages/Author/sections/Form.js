/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import OrderSummaryPopup from "./OrderSummaryPopup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import "./Form.css";

import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import SplitPane, { Pane } from 'react-split-pane';

import {
  // MDBContainer,
  // MDBRow,
  // MDBCard,
  // MDBCardHeader,
  // MDBCol,
  // MDBCardBody,
  // MDBTabs,
  // MDBTabsItem,
  // MDBTabsLink,
  // MDBTabsPane,
  // MDBTabsContent,
  // MDBIcon,
  // MDBCheckbox,
  MDBInput,
  // MDBBtn,
  // MDBTextArea,
} from "mdb-react-ui-kit";

const Contact = ({ selectedPackage }) => {
  const marks = [
    {
      value: 15,
      label: "15s",
    },
    {
      value: 30,
      label: "30s",
    },
    {
      value: 45,
      label: "45s",
    },
    {
      value: 60,
      label: "60s",
    },
    {
      value: 75,
      label: "75s",
    },
    {
      value: 100,
      label: "> 100s",
    },
  ];

  Contact.propTypes = {
    selectedPackage: PropTypes.string,
  };
  

  function valuetext(value) {
    return `${value}`;
  }

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const [selectedOptions, setSelectedOptions] = useState({
    format: "MP4",
    logoDesign: false,
    footageLink: "",
    needVideographer: false,
    soundDesign: false,
    voiceOver: false,
    language: "",
    animation: "2D",
    voice: "",
    voiceStyle: "",
    videoLength: 60,
    package:"yearly"
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormatChange = (event, newFormat) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      format: newFormat,
    }));
  };

  const handleChangeAnimation = (event, newAnimation) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      animation: newAnimation,
    }));
  };

  const handleLogoDesign = (event, newLogo) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      logoDesign: newLogo,
    }));
  };

  const handleVideographer = (event, needVideographerYes) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      needVideographer: needVideographerYes,
    }));
  };

  const handlesoundDesign = (event, needSoundDesign) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      soundDesign: needSoundDesign,
    }));
  };

  const handleVoiceOver = (event, needVoiceOver) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      voiceOver: needVoiceOver,
    }));
  };

  const handleVoice = (event, selectedVoice) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      voice: selectedVoice,
    }));
  };

  const handleVoiceStyle = (event, selectedVoiceStyle) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      voiceStyle: selectedVoiceStyle,
    }));
  };

  const handleVideoLength = (event, videoLengthSlider) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      videoLength: videoLengthSlider,
    }));
  };


  const getPrice = (option) => {
    switch (option) {
      case "3D":
        return 150;
      case "soundDesign":
      case "voiceOver":
      case "needVideographer":
      case "2D":
      case "logoDesign":
        return 50;
      case 15:
        return 75;
      case 30:
        return 105;
      case 45:
        return 125;
      case 60:
        return 155;
      case 75:
        return 185;
      case 90:
        return 235;
      case 100:
        return 300;
      default:
        return 0;
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    if (selectedOptions.format) {
      totalPrice += getPrice(selectedOptions.format);
    }

    if (selectedOptions.animation) {
      totalPrice += getPrice(selectedOptions.animation);
    }
    if (selectedOptions.logoDesign) {
      totalPrice += getPrice("logoDesign");
    }

    if (selectedOptions.voiceOver) {
      totalPrice += getPrice("voiceOver");
    }

    if (selectedOptions.videoLength) {
      console.log(selectedOptions.videoLength);
      totalPrice += getPrice(selectedOptions.videoLength);
    }

    if (selectedOptions.soundDesign) {
      totalPrice += getPrice("soundDesign");
    }

    if (selectedOptions.needVideographer) {
      totalPrice += getPrice("needVideographer");
    }

    return totalPrice;
  };

  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Code to send the form via email
    // You can use an API or a server-side function to handle the email sending process
    // Example: sendEmail(formData);
  };

  return (
    <div className="register-left">
      <div className="register-welcome">
        <div className="register-right">
          <div className="register-form">
            <div className="form-container">
              <h2 className="register-heading"></h2>
              <form onSubmit={handleFormSubmit}>
                <div className="form-outline">

                <MKBox
              variant="gradient"
              bgColor="error"
              coloredShadow="error"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Combine your video here!
              
                  <label className="form-label">
                    Tell us your vision in a simple 5 bulletpoint list!
                  </label>
                  <textarea
                    placeholder="Your company name and error about what you do?
                    What would you like to see in your video?
                    What is a must in your video?
                    What kind of colours you prefer?
                    Were will you be useing this video?"
                    
                    className="form-control"
                    id="textAreaExample"
                    rows="5"
                    name="idea"
                    onChange={handleChange}
                  ></textarea>
                  </MKTypography>
            </MKBox>
                </div>
                <MKBox
              variant="contained"
              bgColor="light"
              coloredShadow="error"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
                <div className="format_select">
                  <ToggleButtonGroup
                    color="error"
                    value={selectedOptions.format}
                    exclusive
                    onChange={handleFormatChange}
                    name="format"
                  >
                    <ToggleButton value="" disabled>
                      Select Format
                    </ToggleButton>
                    <ToggleButton value="MP4">MP4</ToggleButton>
                    <ToggleButton value="MOV">MOV</ToggleButton>
                    <ToggleButton value="WMV">WMV</ToggleButton>
                    <ToggleButton value="AVI">AVI</ToggleButton>
                    <ToggleButton value="AVCHD">AVCHD</ToggleButton>
                    <ToggleButton value="FLV, F4V, SWF">FLV, F4V, SWF</ToggleButton>
                    <ToggleButton value="MKV">MKV</ToggleButton>
                    <ToggleButton value="WEBM or HTML5">WEBM or HTML5</ToggleButton>
                    <ToggleButton value="MPEG-2">MPEG-2</ToggleButton>
                  </ToggleButtonGroup>
                </div>
                
                <div className="format_select_mobile">
                  <select
                    color="error"
                    value={selectedOptions.format}
                    onChange={handleChange}
                    name="format"
                  >
                    <option value="">Select Language</option>
                    <option value="MP4">MP4</option>
                    <option value="MOV">MOV</option>
                    <option value="WMV">WMV</option>
                    <option value="AVCHD">AVCHD</option>
                    <option value="FLV, F4V, SWF">FLV, F4V, SWF</option>
                    <option value="WEBM or HTML5">WEBM or HTML5</option>
                    <option value="WEBM or HTML5">Other - please specify in idea box</option>
                  </select>
                </div>
               
                <ToggleButtonGroup
                  color="error"
                  value={selectedOptions.animation}
                  exclusive
                  onChange={handleChangeAnimation}
                  name="animation"
                  aria-label="Animation"
                >
                  <ToggleButton value="" disabled>
                    Select Animation
                  </ToggleButton>
                  <ToggleButton value="2D">2D</ToggleButton>
                  <ToggleButton value="3D">3D</ToggleButton>
                </ToggleButtonGroup>


                <Form.Group
                className="mb-3" 
                sx={{ width: 200 }}>
                  <ToggleButton value="" disabled>
                    video length
                  </ToggleButton>
                  {selectedOptions.videoLength > 99 && <>
                  <MKInput
                  color="error"
                  variant="outlined"
                  type="number"
                  placeholder="Enter custom time sec"
                  name="videoLength"
                  value={selectedOptions.videoLengthSlider}
                  onBlur={handleChange}
                  
                />
                  </>}
                  
                  <Slider sx={{}}
                    aria-label="Always visible"
                    defaultValue={60}
                    getAriaValueText={valuetext}
                    step={15}
                    marks={marks}
                    valueLabelDisplay="auto"
                    name="videoLength"
                    onChange={handleVideoLength}
                  />
                </Form.Group>

   
<br />
                <ToggleButtonGroup
                  color="error"
                  value={selectedOptions.logoDesign}
                  exclusive
                  onChange={handleLogoDesign}
                  name="logoDesign"
                  aria-label="logoDesign"
                  defaultValue={true}
                  onc
                >
                  <ToggleButton value="" disabled>
                    logoDesign
                  </ToggleButton>
                  <ToggleButton value={true}>YES</ToggleButton>
                  <ToggleButton value={false}>NO</ToggleButton>
                </ToggleButtonGroup>
                {/* {selectedOptions.logoDesign === false && (
                  // <IconButton
                  //   color="error"
                  //   aria-label="upload picture"
                  //   component="label"
                  //   sx={{ width: 300 }}
                  // >
                  //   <input hidden accept="image/*" type="file" />
                  //   Upload logo
                  //   <PhotoCamera />
                  // </IconButton>
                )} */}

                <Form.Group className="mb-3" controlId="needVideographer">
                  <ToggleButtonGroup
                    type="checkbox"
                    name="needVideographer"
                    exclusive
                    value={selectedOptions.needVideographer}
                    onChange={handleVideographer}
                    aria-label="needVideographer"
                    color="error"
                  >
                    <ToggleButton id="needVideographer-toggle" disabled>
                      {" "}
                      Need a videographer?
                    </ToggleButton>
                    <ToggleButton value={true}>YES</ToggleButton>
                    <ToggleButton value={false}>NO</ToggleButton>
                  </ToggleButtonGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="soundDesign">
                  <ToggleButtonGroup
                    type="checkbox"
                    name="soundDesign"
                    exclusive
                    value={selectedOptions.soundDesign}
                    onChange={handlesoundDesign}
                    aria-label="soundDesign"
                    color="error"
                  >
                    <ToggleButton id="soundDesign-toggle" disabled>
                      {" "}
                      Need a sound design?
                    </ToggleButton>
                    <ToggleButton value={true}>YES</ToggleButton>
                    <ToggleButton value={false}>NO</ToggleButton>
                  </ToggleButtonGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="voiceOver">
                  <ToggleButtonGroup
                    type="checkbox"
                    name="voiceOver"
                    value={selectedOptions.voiceOver}
                    onChange={handleVoiceOver}
                    color="error"
                    exclusive
                  >
                    <ToggleButton id="voiceOver-toggle" disabled>
                      Voice Over
                    </ToggleButton>
                    <ToggleButton id="voiceOver-toggle" value={true}>
                      Yes
                    </ToggleButton>
                    <ToggleButton id="voiceOver-toggle" value={false}>
                      No
                    </ToggleButton>
                  </ToggleButtonGroup>

                  {selectedOptions.voiceOver === true && (
                    <div>
                      <ToggleButtonGroup
                        color="error"
                        value={selectedOptions.voice}
                        onChange={handleVoice}
                        name="voice"
                        exclusive
                      >
                        <ToggleButton value="man">Man</ToggleButton>
                        <ToggleButton value="woman">Woman</ToggleButton>
                      </ToggleButtonGroup>

                      <ToggleButtonGroup
                        color="error"
                        value={selectedOptions.voiceStyle}
                        exclusive
                        onChange={handleVoiceStyle}
                        name="voiceStyle"
                        aria-label="voiceStyle"
                      >
                        <ToggleButton value="old">Older</ToggleButton>
                        <ToggleButton value="young">Younger</ToggleButton>
                        <ToggleButton value="child">Child</ToggleButton>
                      </ToggleButtonGroup>

                      <br />

                      <label>
                        Language:
                        <select
                          name="language"
                          value={selectedOptions.language}
                          onChange={handleChange}
                          
                        >
                          <option value="">Select Language</option>
                          <option value="est">Estonian</option>
                          <option value="eng">English</option>
                          <option value="rus">Russian</option>
                          <option value="lat">Latvian</option>
                          <option value="lit">Lithuanian</option>
                          <option value="jne">Other</option>
                        </select>
                      </label>
                    </div>
                  )}
                </Form.Group>
                <br />
                <MKInput
                  color="error"
                  variant="outlined"
                  type="url"
                  placeholder="Add footage/logo link"
                  name="footageLink"
                  value={selectedOptions.footageLink}
                  onChange={handleChange}
                />
                <MKInput
                  color="error"
                  variant="outlined"
                  type="url"
                  placeholder="Add your font link"
                  name="fontLink"
                  value={selectedOptions.fontLink}
                  onChange={handleChange}
                />
                </MKBox>
              </form>
            </div>


            <div className="cart-container">
            <MKBox
variant="contained"
bgColor="light"
coloredShadow="error"
borderRadius="lg"
p={4}
mx={1}
mt={-4}>
              <h2 className="register-heading">Total</h2>
              <p>Selected Options:</p>
              <ul>
              {selectedPackage && <li>Package: {selectedPackage}</li>}
                {selectedOptions.format && (
                  <li>
                    {" "}
                    Format {selectedOptions.format} - {getPrice(selectedOptions.format)} EUR
                  </li>
                )}
                {selectedOptions.animation && (
                  <>
                    <li>
                      {" "}
                      Animation {selectedOptions.animation} - {getPrice(selectedOptions.animation)}{" "}
                      EUR
                    </li>
                    <li>
                      {" "}
                      Video length {selectedOptions.videoLength} sec -{" "}
                      {getPrice(selectedOptions.videoLength)} EUR
                    </li>
                  </>
                )}
                {selectedOptions.logoDesign && <li>Logo Design {getPrice("logoDesign")} EUR</li>}
                {selectedOptions.footageLink && (
                  <li>Footage Link: {selectedOptions.footageLink}</li>
                )}
                {selectedOptions.fontLink && (
                  <li>Font Link: {selectedOptions.fontLink}</li>
                )}
                {selectedOptions.needVideographer && (
                  <li>Need a Videographer {getPrice("needVideographer")} EUR</li>
                )}
                {selectedOptions.soundDesign && <li>Sound Design {getPrice("soundDesign")} EUR</li>}
                {selectedOptions.voiceOver && (
                  <>
                    <li>Voice Over {getPrice("voiceOver")} EUR</li>
                    <li>Voice: {selectedOptions.voice}</li>
                    <li>Voice Style: {selectedOptions.voiceStyle}</li>
                  </>
                )}
                {selectedOptions.language && <li>Language: {selectedOptions.language}</li>}
                

              </ul>
              <p>Price: {getTotalPrice()} EUR</p>

              <div>
                <MKButton   variant="gradient" color="error" onClick={handlePopupOpen}>
                  Confirm
                </MKButton>
                {showPopup && (
                  <OrderSummaryPopup
                    selectedOptions={selectedOptions}
                    onClose={handlePopupClose}
                    getPrice={getPrice}
                    getTotalPrice={getTotalPrice}
                    cart_sum={getTotalPrice}
                  />
                )}
              </div>
              </MKBox>
              
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Contact;

import React, { useRef } from "react";
import "./OrderSummaryPopup.css";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import MKButton from "components/MKButton";

const OrderSummaryPopup = ({ selectedOptions, onClose, getPrice, getTotalPrice }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = () => {
    const orderList =
      "<ol>" +
      `
    <li>Format ${selectedOptions.format}</li>` +
      `
    <li>Animation ${selectedOptions.animation}</li>` +
      `
    <li>Video length ${selectedOptions.videoLength} sec</li>` +
      `${selectedOptions.needVideographer ? "<li>Videographer needed</li>" : ""}` +
      `${selectedOptions.logoDesign ? "<li>Logo design needed</li>" : ""}` +
      `${selectedOptions.voiceOver ? "<li>Voiceover needed</li>" : ""}` +
      `${selectedOptions.soundDesign ? "<li>Sound design needed</li>" : ""}` +
      `${selectedOptions.voiceStyle ? `<li>Voice style ${selectedOptions.voiceStyle}</li>` : ""}` +
      `${selectedOptions.voice ? `<li>Voice actor ${selectedOptions.voice}</li>` : ""}` +
      `${selectedOptions.language ? `<li>Language ${selectedOptions.language}</li>` : ""}` +
      `${
        selectedOptions.footageLink ? `<li>Footagelink ${selectedOptions.footageLink}</li>` : ""
      }` +
      `${selectedOptions.fontLink ? `<li>Fontlink ${selectedOptions.fontLink}</li>` : ""}` +
      "</ol>";

    const data = {
      client_name: nameRef.current.value,
      client_email: emailRef.current.value,
      message: messageRef.current.value,
      cart_sum: getTotalPrice(),
      order_list: orderList,
    };

    emailjs.send("service_ew78t4p", "template_d2a8yfi", data, "BzlVLHD4O0_feXKUB").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="order-summary-popup">
      <div className="order-summary-popup-content">
        <h3>Order Summary</h3>
        <ul>
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
                Animation {selectedOptions.animation} - {getPrice(selectedOptions.animation)} EUR
              </li>
              <li>
                {" "}
                Video length {selectedOptions.videoLength} sek -{" "}
                {getPrice(selectedOptions.videoLength)} EUR
              </li>
            </>
          )}
          {selectedOptions.logoDesign && <li>Logo Design {getPrice("logoDesign")} EUR</li>}
          {selectedOptions.footageLink && <li>Footage Link: {selectedOptions.footageLink}</li>}
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
        <p>We will send you order confirmation and invoice to e-mail</p>
        <br />
        <div className="order-summary-form">
          <TextField inputRef={nameRef} label="Name" variant="outlined" /> <br />
          <TextField inputRef={emailRef} label="Email" variant="outlined" /> <br />
          <TextField inputRef={messageRef} label="Comments" variant="outlined" /> <br />
        </div>
        <MKButton
          variant="outlined"
          color="error"
          onClick={() => {
            sendEmail();
            onClose();
          }}
        >
          Confirm order
        </MKButton>
        <MKButton variant="outlined" color="error" onClick={onClose}>
          Back to change
        </MKButton>
      </div>
    </div>
  );
};

OrderSummaryPopup.propTypes = {
  selectedOptions: PropTypes.shape({
    format: PropTypes.string,
    animation: PropTypes.string,
    videoLength: PropTypes.number,
    logoDesign: PropTypes.bool,
    footageLink: PropTypes.string,
    needVideographer: PropTypes.bool,
    soundDesign: PropTypes.bool,
    voiceOver: PropTypes.bool,
    voice: PropTypes.string,
    voiceStyle: PropTypes.string,
    language: PropTypes.string,
    fontLink: PropTypes.string,
  }),
  onClose: PropTypes.func,
  getPrice: PropTypes.func,
  getTotalPrice: PropTypes.func,
};

export default OrderSummaryPopup;

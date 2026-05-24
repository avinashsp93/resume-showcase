import { useState } from "react";
import { useData } from "../../contexts/DataContext";
import Snackbar from "../Snackbar/Snackbar";

function Contact() {
  const {
    rightHalf: {
      contact: { location, phone, email, resume },
    },
  } = useData();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  async function handleCopyToClipboard(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setToastMessage(`"${value}" copied to clipboard`);
      setShowToast(true);
    } catch (error) {
      setToastMessage("Failed to copy");
      setShowToast(true);
    }
  }

  return (
    <div className="contact row">
      <Snackbar
        show={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />

      <ul className="contact-list">
        <li
          id="location"
          className="h6 text-uppercase flip-item"
          onClick={() => handleCopyToClipboard(location)}
        >
          <div className="flip-inner" title="Click to copy">
            <div className="flip-front">
              Location
              <span>&nbsp;&#x2022;</span>
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="flip-back">{location}</div>
          </div>
        </li>
        <li
          id="phone"
          className="h6 text-uppercase"
          onClick={() => handleCopyToClipboard(phone)}
        >
          <div className="flip-inner" title="Click to copy">
            <div className="flip-front">
              Phone
              <span>&nbsp;&#x2022;&nbsp;</span>
              <i className="fas fa-phone" />
            </div>
            <div className="flip-back">{phone}</div>
          </div>
        </li>
        <li
          id="email"
          className="h6 text-uppercase"
          onClick={() => handleCopyToClipboard(email)}
        >
          <div className="flip-inner" title="Click to copy">
            <div className="flip-front">
              Email
              <span>&nbsp;&#x2022;&nbsp;</span>
              <i className="fas fa-envelope" />
            </div>
            <div className="flip-back">{email}</div>
          </div>
        </li>
        <li id="resume" className="h6 text-uppercase" title="Open in new tab">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <span>&nbsp;&#x2022;&nbsp;</span>
          <i className="fas fa-file-pdf" />
        </li>
      </ul>
    </div>
  );
}

export default Contact;

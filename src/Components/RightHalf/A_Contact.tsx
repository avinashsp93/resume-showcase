import { useData } from "../../contexts/DataContext";

function Contact() {
  const {
    rightHalf: {
      contact: { location, phone, email, resume },
    },
  } = useData();

  function handleCopyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
  }

  return (
    <div className="contact row">
      <ul className="contact-list">
        <li
          id="location"
          className="h6 text-uppercase flip-item"
          onClick={() => handleCopyToClipboard(location)}
        >
          <div className="flip-inner" title="Click to copy">
            <div className="flip-front">Location</div>
            <div className="flip-back">{location}</div>
          </div>
        </li>
        <li
          id="phone"
          className="h6 text-uppercase"
          onClick={() => handleCopyToClipboard(phone)}
        >
          <div className="flip-inner" title="Click to copy">
            <div className="flip-front">Phone</div>
            <div className="flip-back">{phone}</div>
          </div>
        </li>
        <li
          id="email"
          className="h6 text-uppercase"
          onClick={() => handleCopyToClipboard(email)}
        >
          <div className="flip-inner" title="Click to copy">
            <div className="flip-front">Email</div>
            <div className="flip-back">{email}</div>
          </div>
        </li>
        <li id="resume" className="h6 text-uppercase" title="Open in new tab">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <span>&nbsp;</span>
          <i className="fas fa-file-pdf" />
        </li>
      </ul>
    </div>
  );
}

export default Contact;

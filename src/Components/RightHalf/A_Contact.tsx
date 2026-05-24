import { useData } from "../../contexts/DataContext";

function Contact() {
  const {
    rightHalf: {
      contact: { location, phone, email, resume },
    },
  } = useData();

  return (
    <div className="contact row">
      <ul className="contact-list">
        <li id="location" className="h6 text-uppercase flip-item">
          <div className="flip-inner">
            <div className="flip-front">Location</div>
            <div className="flip-back">{location}</div>
          </div>
        </li>
        <li id="phone" className="h6 text-uppercase">
          <div className="flip-inner">
            <div className="flip-front">Phone</div>
            <div className="flip-back">{phone}</div>
          </div>
        </li>
        <li id="email" className="h6 text-uppercase">
          <div className="flip-inner">
            <div className="flip-front">Email</div>
            <div className="flip-back">{email}</div>
          </div>
        </li>
        <li id="resume" className="h6 text-uppercase">
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

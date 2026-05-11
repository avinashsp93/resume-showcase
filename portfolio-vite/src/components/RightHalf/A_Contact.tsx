import { useData } from "../../contexts/DataContext";

function Contact() {
  const {
    rightHalf: {
      contact: { location, phone, email, resume },
    },
  } = useData();
  return (
    <div id="contact" className="contact row">
      <ul className="contact-list">
        <li id="location" className="h6 text-uppercase">
          {location}
        </li>
        <li id="phone" className="h6 text-uppercase">
          {phone}
        </li>
        <li id="email" className="h6 text-uppercase">
          {email}
        </li>
        <li id="resume" className="h6 text-uppercase">
          {resume}
        </li>
      </ul>
    </div>
  );
}

export default Contact;

function Contact(props: any) {
  var location = "Cary, NC";
  var phone = "+1(618)353-4297";
  var email = "avinashsp93@gmail.com";
  var resume = "External Link";

  return (
    <div id="contact" className="contact row">
      <ul className="contact-list">
        <li id="location" className="text-uppercase">
          {location}
        </li>
        <li id="phone" className="text-uppercase">
          {phone}
        </li>
        <li id="email" className="text-uppercase">
          {email}
        </li>
        <li id="resume" className="text-uppercase">
          {resume}
        </li>
      </ul>
    </div>
  );
}

export default Contact;

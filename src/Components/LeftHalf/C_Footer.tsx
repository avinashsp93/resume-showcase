import { useData } from "../../contexts/DataContext";

function Footer() {
  const {
    leftHalf: { footer },
  } = useData();
  return (
    <div className="footer text-center">
      {footer.map((link, index) => (
        <div key={index} className="icon-box">
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            title={link.name}
          >
            <i className={link.icon} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Footer;

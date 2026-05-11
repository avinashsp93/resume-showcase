import { useData } from "../../contexts/DataContext";

function Footer() {
  const {
    leftHalf: { footer },
  } = useData();
  return (
    <div className="footer text-center fs-4">
      {footer.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          <i className={link.icon} />
        </a>
      ))}
    </div>
  );
}

export default Footer;

import { useData } from "../../contexts/DataContext";

function Navigator() {
  const {
    leftHalf: { navigators },
  } = useData();
  return (
    <div className="navigator">
      <ul>
        {navigators.map((navigator, index) => (
          <li key={index}>
            <a href="/" className="h6 text-uppercase" target="_blank">
              {navigator}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigator;

import { useData } from "../../contexts/DataContext";

function Biography() {
  const {
    rightHalf: { biography },
  } = useData();
  return <p className="m-2 text-justify">{biography}</p>;
}

export default Biography;

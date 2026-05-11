import { useData } from "../../contexts/DataContext";

function Biography() {
  const {
    rightHalf: { bio },
  } = useData();
  return (
    <p id="bio" className="m-2 text-justify">
      {bio}
    </p>
  );
}

export default Biography;

import "./App.css";
import Sidebar from "./components/LeftHalf/Sidebar";
import MainContent from "./components/RightHalf/MainContent";
import data from "./data.json";

function App({ data: any }) {
  console.log(data);
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar leftHalf={data.leftHalf} />
      </div>

      <div className="main-content">
        <MainContent rightHalf={data.rightHalf} />
      </div>
    </div>
  );
}

export default App;

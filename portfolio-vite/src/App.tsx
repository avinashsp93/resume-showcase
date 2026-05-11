import "./App.css";
import Sidebar from "./components/LeftHalf/Sidebar";
import MainContent from "./components/RightHalf/MainContent";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-content">
        <MainContent />
      </div>
    </div>
  );
}

export default App;

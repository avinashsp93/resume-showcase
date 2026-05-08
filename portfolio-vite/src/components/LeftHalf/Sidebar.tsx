import Intro from "./A_Intro";
import Navigator from "./B_Navigator";
import Footer from "./C_Footer";

function Sidebar() {
  return (
    <div>
      <Intro />
      <hr />
      <Navigator />
      <hr />
      <Footer />
    </div>
  );
}

export default Sidebar;

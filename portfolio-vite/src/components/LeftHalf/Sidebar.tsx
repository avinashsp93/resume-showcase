import Intro from "./A_Intro";
import Navigator from "./B_Navigator";
import Footer from "./C_Footer";

function Sidebar({ leftHalf }: any) {
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

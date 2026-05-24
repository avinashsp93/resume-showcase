import Intro from "./A_Intro";
import Navigator from "./B_Navigator";
import Footer from "./C_Footer";

function Sidebar() {
  return (
    <div>
      <section id="intro">
        <Intro />
      </section>
      <section id="navigator">
        <Navigator />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Sidebar;

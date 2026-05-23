import Intro from "./A_Intro";
import Navigator from "./B_Navigator";
import Footer from "./C_Footer";

function Sidebar() {
  return (
    <div>
      <section>
        <Intro />
      </section>
      <section>
        <Navigator />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Sidebar;

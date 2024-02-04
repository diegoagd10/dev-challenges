import "./App.css";
import { ButtonsShowcase } from "./ButtonsShowcase";
import { ComponentShowcase } from "./ComponentShowcase";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";

function App() {
  return (
    <section className="sb-layout">
      <aside className="sb-layout-sidebar">
        <SideBar />
      </aside>
      <main className="sb-layout-content">
        <ComponentShowcase title={"Buttons"}>
          <ButtonsShowcase />
        </ComponentShowcase>
      </main>
      <Footer />
    </section>
  );
}

export default App;

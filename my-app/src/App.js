import css from "./App.module.css";
import SideBar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import Content from "./components/Content";

function App() {
  return (
    <div className={css.App}>
      <SideBar />
      <NavBarForm />
      <Content />
    </div>
  );
}

export default App;

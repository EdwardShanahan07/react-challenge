import css from "./App.module.css";
import SideBar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import ContentHooks from "./components/ContentHooks";

function App() {
  return (
    <div className={css.App}>
      <SideBar />
      <NavBarForm />
      <ContentHooks />
    </div>
  );
}

export default App;

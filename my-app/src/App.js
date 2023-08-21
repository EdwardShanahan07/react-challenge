import css from "./App.module.css";
import SideBar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import ContentAPI from "./components/ContentAPI";

function App() {
  return (
    <div className={css.App}>
      <SideBar />
      <NavBarForm />
      <ContentAPI />
    </div>
  );
}

export default App;

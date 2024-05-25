import { Outlet, Link } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./Layout.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="mainContent">
        <Outlet />
      </div>
      <Footer />
    </>
  )
};

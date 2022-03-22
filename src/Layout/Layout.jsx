import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
        <Footer/>
    </>
  );
};
export default Layout;

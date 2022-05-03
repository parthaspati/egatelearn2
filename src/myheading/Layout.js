import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>

        <Link to="/">Home</Link> &nbsp;&nbsp;
        <Link to="/Aboutus">About Us</Link> &nbsp;&nbsp;
        <Link to="/Courses">Courses</Link> &nbsp;&nbsp;
        {/* <Link to="/contact">Batches</Link> &nbsp;&nbsp;
        <Link to="/contact">Corporates</Link> &nbsp;&nbsp;
        <Link to="/contact">Contacts</Link> &nbsp;&nbsp;
        <Link to="/contact">Placements</Link> &nbsp;&nbsp;
        <Link to="/contact">Enquiry</Link>&nbsp;&nbsp; */}
        <em ><b>+91-9854528595</b></em>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

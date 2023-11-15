import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>Este es el About</h1>
      <h5>Vision</h5>
      <h5>Mision</h5>
      <h5>History</h5>
      <Outlet />
    </div>
  );
}

export default About;
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Scroll from "../../components/Scroll";

export default function Dashboard() {
  return (
    <>
      {/* <h1>Welconme to dashboard</h1> */}
      <NavBar />
      <Scroll>
        <Sidebar />
      </Scroll>
    </>
  );
}

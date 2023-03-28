import Home from "./pages/home/Home";
import TopNav from "./components/topnav/TopNav";
import Single from "./pages/home/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <div className="App">
      <TopNav />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      <Settings />
    </div>
  );
}

export default App;

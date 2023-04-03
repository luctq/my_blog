import Home from "./pages/home/Home";
import TopNav from "./components/topnav/TopNav";
import Single from "./pages/home/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/single" element={user ? <Single /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;

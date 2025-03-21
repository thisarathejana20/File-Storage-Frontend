import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import ActivateAccount from "./pages/ActivateAccount";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/auth/activate-account" element={<ActivateAccount />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AccountDetails from "./Components/AccountDetails";
import NotFound from "./Components/NotFound"; // <-- Import fallback component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account/:id" element={<AccountDetails />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="font-bf">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage/>}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

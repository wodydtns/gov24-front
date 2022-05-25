import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import List from "./pages/list";
import Detail from "./pages/detail";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

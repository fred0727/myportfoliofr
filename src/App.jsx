import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { NavigatePagesProvider } from "./Context";

function App() {
  return (
    <main className="min-h-screen font-['Teko']">
      <NavigatePagesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </NavigatePagesProvider>
    </main>
  );
}

export default App;

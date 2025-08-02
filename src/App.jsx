import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { NavigatePagesProvider } from "./Context";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <NavigatePagesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </NavigatePagesProvider>
    </main>
  );
}

export default App;

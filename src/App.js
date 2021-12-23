import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; import './App.css';
import AllUnis from "./Pages/AllUniversities/AllUnis/AllUnis";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Share/Header/Header";
import UniDetails from "./Pages/UniDetails/UniDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AllUniversities" element={<AllUnis />} />
          <Route path="AllUniversities/:UniversityName" element={<UniDetails />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import { NoPage } from "./pages/NoPage";

export const App = () => { 
  return (
      <>
      <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      <Footer />
      </>
  );
}

export default App;

import Employe from "./components/Employe";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Employe />
      </div>

      <Footer />
    </div>
  );
}

export default App;

import DeletePopup from "./components/deletePopup/DeletePopup";
import Employe from "./components/Employee/Employe";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Popup from "./components/popup/Popup";

function App() {
  return (
    <div className="min-h-screen flex flex-col">

     <Popup/>
     <DeletePopup/>

      <Navbar />
      
      <div className="flex-1">
        <Employe />
      </div>

      <Footer />
    </div>
  );
}

export default App;

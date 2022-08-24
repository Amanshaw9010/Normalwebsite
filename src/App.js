import Navbar from './component/Navbar'
import Container from './component/Container'
import Container2 from './component/Container2';
import Footer from './component/Footer';
import About from './component/About';
import Product from './component/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {

  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>

      <Container2
        name1="Turmeric (Haldi)"
        price1="Rs = 150/Kg"
        name2="Black pepper (Golki)"
        price2="Rs = 480/Kg"
        name3="Cashew (Kaju)"
        price3="Rs = 900/Kg"
        name4="Almond (badam)"
        price4="Rs = 500/Kg"
        name5="Cumin (Jeera)"
        price5="Rs = 360/Kg"
      />



      {/*        
      <Cards imgsrc="thor moive" title="love and thunder" name="tender" />
      <Cards imgsrc="spider man moive" title="No way home" name="Shaw" /> */}

      <Footer />

    </>
  );
}



export default App;

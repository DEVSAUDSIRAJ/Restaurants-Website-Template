import "../src/assets/css/style.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Menu/>
      <Product/>
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;

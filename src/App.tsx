import "./App.css";
import Footer from "./components/Footer/footer";
import LeadForm from "./components/Form";
import Header from "./components/Header/Header";
import GiftInfo from "./Pages/Content";
import Hero from "./Pages/Hero/hero";

function App() {
  return (
    <>
      {" "}
      <Header />
      <Hero />
      {/* <LeadForm /> */}
      <GiftInfo />
      <Footer />
    </>
  );
}

export default App;

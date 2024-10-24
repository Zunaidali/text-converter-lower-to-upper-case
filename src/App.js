import "./App.css";
// import ABM from "./components/Props";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <ABM  about="React JS Cour"/> */}
      <div className="container">
        <TextForm heading="Enter The Text To Analyze below" />
      </div>
    </>
  );
}

export default App;

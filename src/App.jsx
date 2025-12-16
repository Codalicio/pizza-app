import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <div className="w-[1200px] mx-auto p-5">
        <Header />
        <Nav />
        <Info />
        <Card />
      </div>
    </>
  );
}

export default App;

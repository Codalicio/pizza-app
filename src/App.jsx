import { useState } from "react";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Nav from "./components/nav/Nav";

function App() {
  const [isActive, setIsActive] = useState("Pizzas");
  return (
    <>
      <div className="w-[1200px] mx-auto p-5 box-border">
        <Header />
        <Nav activeTab={isActive} setActiveTab={setIsActive} />
        <Info activeTab={isActive} />
      </div>
    </>
  );
}

export default App;

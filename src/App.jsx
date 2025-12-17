import { useState } from "react";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Nav from "./components/nav/Nav";
import Search from "./components/search/Search";

function App() {
  const [isActive, setIsActive] = useState("Pizzas");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="w-300 mx-auto p-5 box-border">
        <Header />
        <Nav activeTab={isActive} setActiveTab={setIsActive} />
        <Search
          activeTab={isActive}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Info activeTab={isActive} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;

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
      <div className="max-w-300 mx-auto p-4 box-border sm:p-6">
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

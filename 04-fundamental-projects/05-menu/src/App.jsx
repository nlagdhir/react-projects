import { useState } from "react";
import Title from "./Title";
import data from "./data.js";
import Menu from "../Menu";
import Category from "./Category";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }

    const filteredMenu = data.filter(
      (menuItem) => menuItem.category === category
    );
    setMenu(filteredMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Category categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;

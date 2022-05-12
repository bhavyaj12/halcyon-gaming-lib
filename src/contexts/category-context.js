import { useEffect, useState, useContext, createContext } from "react";

import { fetchCategories } from "utilities";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categoryState, setCategoryState] = useState({ categories: [] });

  const getCategories = async () => {
    try {
      const {
        data: { categories },
      } = await fetchCategories();
      console.log(categories);
      setCategoryState({ categories: categories });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryState }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };

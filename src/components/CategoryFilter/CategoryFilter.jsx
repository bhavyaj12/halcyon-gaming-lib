import { useCategory } from "contexts";

const CategoryFilter = () => {
  const {
    categoryState: { categories },
  } = useCategory();

  return (
    <div className="flex-row mx-5 mt-2 p-3">
      {categories.map(({ _id, categoryName }) => (
        <div key={_id} className="button button-primary btn-outline">
          {categoryName}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;

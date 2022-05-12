import { useCategory } from "contexts";
import "./category-list.css";

const CategoryList = () => {
  const { categoryState } = useCategory();
  console.log(categoryState);
  return (
    <div className="categories-container mt-7">
      {categoryState.categories.map((category) => {
        const { _id, categoryImg, categoryName } = category;
        return (
          <div key={_id}>
            <a href="/" className="link-no-decor router-link">
              <div className="card card-vertical ecomm-card card-shadow p-3">
                <div className="img-badge-container">
                  <img
                    src={categoryImg}
                    alt="sunscreen sample"
                    className="img-responsive vt-card-img"
                  />
                </div>
                <div className="vt-card-text">
                  <p className="ecomm-card-heading">{categoryName}</p>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;

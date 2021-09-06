import { Link } from "react-router-dom";
function Posts({ recipes }) {
  return (
    <div>
      <div className="RecipeHeaderImg">
        <h1 className="BackgroundText2">OUR RECIPES</h1>
      </div>
      <div className="RecipeBox">
        {recipes.map((recipe) => (
          <div className="RecipeContainer">
            <div className="RecipeTitle">{recipe.fields.name}</div>

            <div className="RecipeImage">
              <Link to={`/recipes/${recipe.sys.id}`}>
                <img
                  src={recipe.fields.image.fields.file.url}
                  alt={`${recipe.fields.name}`}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <a href="/">
          <button>Back Home</button>
        </a>
      </div>
    </div>
  );
}

export default Posts;

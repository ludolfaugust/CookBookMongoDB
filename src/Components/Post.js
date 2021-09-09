import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Post = ({ recipes }) => {
  const { id } = useParams();
  return (
    <div className="SingleRecipeContainer">
      {recipes
        .filter((recipe) => recipe._id === id)
        .map((recipe) => (
          <div className="SingleRecipe">
            <div className="SingleRecipeTitle">
              <h1>{recipe.recipeName}</h1>
            </div>
            <div className="SingleRecipeHead">
              <div className="SingleRecipeImage">
                <img src={recipe.image} alt={recipe.recipeName} />
              </div>

              <div className="SingleRecipeIngredients">
                <h2>Ingredients</h2>
                <p>{recipe.ingredients}</p>
              </div>
            </div>
            <div className="SingleRecipeDescription">
              <p>Step by Step</p>
              <br />
              {recipe.description}
            </div>
            <div className="BackButton">
              <Link to="/recipes/">
                <button>Go Back</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Post;

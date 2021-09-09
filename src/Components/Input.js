import React from "react";

function Input() {
  return (
    <div>

const createRecipe = (req, res) => {
  const { recipeName, image, ingredients, description } = req.body;
  console.log(req.body);

  res.send("create new recipe");
};



      <input
      onSubmit
      />
    </div>
  );
}

export default Input;

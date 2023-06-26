let recipes = []; // Array to store recipe objects

// Function to add a new recipe to the data structure
function addRecipe(title, ingredients, instructions, image) {
  const recipe = {
    title: title,
    ingredients: ingredients,
    instructions: instructions,
    image: image,
  };
  recipes.push(recipe);
}

// Function to retrieve and display the list of recipes
// Function to retrieve and display the list of recipes
// Function to retrieve and display the list of recipes
function displayRecipes() {
  const recipesList = document.getElementById("recipes");
  recipesList.innerHTML = ""; // Clear the existing content

  recipes.forEach((recipe, index) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe");

    const titleElement = document.createElement("h3");
    titleElement.textContent = `Recipe ${index + 1}: ${recipe.title}`;
    recipeItem.appendChild(titleElement);

    const imageElement = document.createElement("img");
    imageElement.classList.add("recipe-image");
    if (recipe.image instanceof File) {
      const imageUrl = URL.createObjectURL(recipe.image);
      imageElement.src = imageUrl;
      imageElement.alt = recipe.title;
    } else {
      imageElement.src = recipe.image;
      imageElement.alt = "No Image";
    }
    recipeItem.appendChild(imageElement);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteRecipe(index));
    recipeItem.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editRecipe(index));
    recipeItem.appendChild(editButton);

    const viewButton = document.createElement("button");
    viewButton.textContent = "View";
    viewButton.addEventListener("click", () => viewRecipe(index));
    recipeItem.appendChild(viewButton);

    recipesList.appendChild(recipeItem);
  });
}

// Function to delete a recipe
function deleteRecipe(index) {
  recipes.splice(index, 1);
  displayRecipes();
}

// Function to edit a recipe
function editRecipe(index) {
  const recipe = recipes[index];
  const title = prompt("Enter new title:", recipe.title);
  const ingredients = prompt("Enter new ingredients:", recipe.ingredients);
  const instructions = prompt("Enter new instructions:", recipe.instructions);

  if (title && ingredients && instructions) {
    recipes[index] = {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
      image: recipe.image,
    };
    displayRecipes();
  }
}

// Function to view a recipe
function viewRecipe(index) {
  const recipe = recipes[index];
  alert(
    `Title: ${recipe.title}\n\nIngredients: ${recipe.ingredients}\n\nInstructions: ${recipe.instructions}`
  );
}

// Display the recipes on page load
displayRecipes();

document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  var title = document.getElementById("title").value;
  var ingredients = document.getElementById("ingredients").value;
  var instructions = document.getElementById("instructions").value;
  var imageInput = document.getElementById("image");
  var imageFile = imageInput.files[0];

  addRecipe(title, ingredients, instructions, imageFile);
  displayRecipes();
});

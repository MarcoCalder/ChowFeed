
function displayRecipe(title, image, url) {
    $("#title").text(title);
    $("#image").html("<img src='" + image + "'>");
    //$("#ingredients").text(ingredients);
    $("#url").html("<a href='" + url + "'> Find the Steps Here</a>");
};

displayRecipe();

function showTrendyRecipe(recipeId) {
    var apiKey = "bb406a742ced5a8a94ef92e03ff0b5c2";
    var queryURL = "https://www.food2fork.com/api/get?key=" + apiKey + "&rId=" + recipeId;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var oneRecipeResponse = JSON.parse(response);
        console.log(oneRecipeResponse);
        displayRecipe(oneRecipeResponse.recipe.title, oneRecipeResponse.recipe.image_url, oneRecipeResponse.recipe.source_url);
        //console.log(oneRecipeResponse.recipe.ingredients);
        for (var i = 0; i < oneRecipeResponse.recipe.ingredients.length; i++) {
            $("#ingredients").append("<p>" + oneRecipeResponse.recipe.ingredients[i] + "</p>");
        }

    });

}
var storedRecipe = localStorage.getItem("recipeId");
showTrendyRecipe(storedRecipe);
//showTrendyRecipe(28924);
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { apiKey, baseURL } from "../Components/Utils";
import UnorderedList from "../Components/UnorderedList";
import "./Recipe.css";

type Recipe = {
    ingredients: string
    servings: string
    instructions: string
}

export default function Recipe() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [recipe, setRecipe] = useState<Recipe>({} as Recipe);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [instructions, setInstructions] = useState<string[]>([]);

    const name = searchParams.get("name");
    let img: string = searchParams.get("img")!;

    useEffect(() => {
        fetch(`${baseURL}/recipe?query=${name}`, {
            headers: {
                "X-Api-Key": apiKey
            }
        })
            .then((res) => {
                return res.json()
            })
            .then((jsonData) => {
                const recipes = jsonData as Recipe[];
                const ingredients = recipes[0].ingredients;
                const ingredientsList = ingredients.split("|");
                const instructions = recipes[0].instructions;
                const instructionsList = instructions.split(".");
                setIngredients(ingredientsList);
                setInstructions(instructionsList);
                setRecipe(recipes[0])
            })
            .catch((err) => {
                alert(`Failed to fetch: ${err}`)
            })
    }, [])

    return (
        <div className="recipe">
            <div className="title">
                <p>{name}</p>
            </div>
            <div className="servings">
                <p>{recipe.servings}</p>
            </div>
            <div className="recipe-image">
                <img src={"../../images/" + img} />
            </div>
            <div className="ingredients">
                <p>Ingredients</p>
                <UnorderedList list={ingredients} />
            </div>
            <div className="instructions">
                <UnorderedList list={instructions} />
            </div>
        </div>
    )
}
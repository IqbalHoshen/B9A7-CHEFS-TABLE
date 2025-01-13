import { useEffect } from "react";
import { useState } from "react";
import RecipesCard from "./RecipesCard";

const Recipes = () => {

    const [recipes, setrecipes] = useState([]);

    useEffect(
        () => {
            fetch('recipes.json')
                .then(res => res.json())
                .then(data => setrecipes(data))
        }, []
    )

    return (
        <section className="mx-5 px-10">
            <div className="flex-col text-center mb-5">
                <h3 className="text-4xl text-black font-bold">Our Recipes</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus.<br></br> Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="flex px-5 mb-10">
                <div className="w-2/3">
                    <h3>Count Data : {recipes.length}</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {
                            recipes.map(recipe => <RecipesCard key={recipe.recipe_id} recipesCard={recipe}></RecipesCard>)
                        }
                    </div>
                </div>

                <div className="w-1/3">
                    <h3>add item</h3>
                </div>
            </div>
        </section>


    );
};

export default Recipes;
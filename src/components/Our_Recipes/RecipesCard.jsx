import { CiClock2 } from "react-icons/ci";
import { FiActivity } from "react-icons/fi";
import PropTypes from 'prop-types';

const RecipesCard = ({ recipesCard }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipesCard;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl border border-indigo-600">
                <figure className="px-10 pt-10">
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{recipe_name}</h2>
                    <p className='mb-2'>{short_description}</p>
                    <p className='font-bold text-lg'>Ingredients: {ingredients.length}</p>
                    <ul className='list-disc'>

                        {
                            ingredients.map(ingredient => <li key={recipe_id}>{ingredient}</li>)
                        }

                    </ul>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-2"><CiClock2 size={24} /> {preparing_time} minutes</div>
                        <div className="flex items-center gap-2"><FiActivity size={24} /> {calories} calories</div>
                    </div>

                    <div className="mt-5">
                        <button className="btn btn-success rounded-3xl">Want to Cook</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

RecipesCard.propTypes = {
    recipesCard: PropTypes.object.isRequired
}

export default RecipesCard;
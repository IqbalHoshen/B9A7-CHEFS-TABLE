import PropTypes from 'prop-types';

const RecipesCard = ({ recipesCard }) => {
    const { recipe_name, recipe_image } = recipesCard;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
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
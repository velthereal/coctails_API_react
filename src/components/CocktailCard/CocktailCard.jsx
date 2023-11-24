import styles from './CocktailCrad.module.css';

const CocktailCard = ({ strDrink, strDrinkThumb, idDrink }) => {
	return (
		<div className={styles['cocktail-card']}>
			<h4>{ strDrink }</h4>
			<img src={strDrinkThumb} alt="drink" />
		</div>
	)
}

export default CocktailCard;
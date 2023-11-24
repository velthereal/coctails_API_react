// import styles from './Cocktails.module.css';
import CocktailCard from '../CocktailCard';
import QueryLoader from '../QueryLoader';
import { useState, useEffect } from 'react';

const Coctails = () => {
	const [cocktails, setCocktails] = useState([]);
	const [fetching, setFetching] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	useEffect(function() {
		setFetching(true);
		fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
		.then(response => response.json())
		.then(resp => {
			setCocktails(resp.drinks);
			setFetching(false);
		})
		.catch(err => {
			console.log('err => ', err);
			setFetching(false);
			setFetchError(err);
		})
	}, []);

	return (
		<>
			<QueryLoader fetching={fetching} error={fetchError}>
				{ cocktails.map((item, index) => {
					const { strDrink, strDrinkThumb, idDrink } = item;
					return (
						<CocktailCard
							key={index}
							strDrink={strDrink}
							strDrinkThumb={strDrinkThumb}
							idDrink={idDrink} />
					)
				})}
			</QueryLoader>
		</>
	)
}

export default Coctails;
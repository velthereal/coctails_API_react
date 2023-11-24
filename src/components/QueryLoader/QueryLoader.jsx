import styles from './QueryLoader.module.css';

const QueryLoader = (props) => {
	const { children, error, fetching } = props;

	return (
		<div>
			<div className={styles['center']}>{ fetching && 'Loading ...' }</div>
			<div className={styles['center']}>{ error && `Opps, we have error: ${error}` }</div>
			<div className={styles["common"]}>{ (!error && !fetching) && children }</div>
		</div>
	)
}

export default QueryLoader;
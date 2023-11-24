const QueryLoader = (props) => {
	const { children, error, fetching } = props;

	return (
		<div className="common">
			<div>{ fetching && 'Loading ...' }</div>
			<div>{ error && `Opps, we have error: ${error}` }</div>
			{ (error && !fetching) && children }
		</div>
	)
}

export default QueryLoader;
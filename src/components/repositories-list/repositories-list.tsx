import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
// dispatch(actionCreators.searchRepositories(term) as any);

const RepositoriesList: React.FC = () => {
	const [query, setQuery] = useState("");
	const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector(
		(state) => state.repositories
	);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		searchRepositories(query);
	};

	const handleOnInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setQuery(event.target.value);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={query} onChange={(e) => handleOnInputChange(e)} />
				<button> Search</button>
			</form>

            {error && <h3>{error}</h3>}
            {loading && <h3>loading...</h3>}
            {!error && !loading && 
            data.map((response) => <div key={response}>{response}</div>)}
		</div>
	);
};

export { RepositoriesList };

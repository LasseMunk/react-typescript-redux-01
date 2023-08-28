import './App.css';
import { Provider } from 'react-redux';
import { store } from '../state';
import { RepositoriesList } from './repositories-list/repositories-list';


function App() {
  return (
    <Provider store={store}> 
    <div>
      <h1>Search for a package</h1>
      <RepositoriesList/>
    </div>
    </Provider>
  );
}

export default App;

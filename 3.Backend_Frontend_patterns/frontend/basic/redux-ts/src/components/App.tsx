import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriestList from './RepositoriestList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriestList />
      </div>
    </Provider>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import GusetList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      {/* <GusetList /> */}
      <UserSearch />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

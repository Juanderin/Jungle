import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreSession } from './store/csrf';


const root = ReactDOM.createRoot(document.getElementById('root'))

function initializeApp () {
  const currentUser = JSON.parse(sessionStoreage.getItem('currentUser'))

  let initialState = {};
  
  if (currentUser) {
    initialState = {
      users: {
        [currentUser.id]: currentUser
      },
      // session: {
      //   currentUserId: currentUser.id
      // }
    }
  }

  const store = configureStore();
  window.store = store;

  root.render (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  );
  
}

restoreSession().then(initializeApp);


// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
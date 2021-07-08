import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

async function main() {
  if (process.env.NODE_ENV === 'development') {
    if (window.location.pathname === '/movies') {
      window.location.pathname = '/movies/';
      return;
    }
    const { worker } = require('./mocks/browser');
    await worker.start({
      serviceWorker: {
        url: '/movies/mockServiceWorker.js',
      },
    });
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

main();

import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import { ToastContainer } from 'react-toastify';
import App from './react/App';

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<>
    <ToastContainer
          position='top-left'
          autoClose={5000}
          closeOnClick={true}
          pauseOnHover={true}
          theme='light' />
  </>, document.getElementById('notifications'));

  ReactDOM.render(<>
    <App />
  </>, document.getElementById('app'));
});

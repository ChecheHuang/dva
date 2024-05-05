import dva from 'dva';
import './index.css';
import Router from './router';
import {createBrowserHistory} from 'history';
// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/product').default);

// 4. Router
app.router(Router);

// 5. Start
app.start('#root');

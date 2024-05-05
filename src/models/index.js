const context = require.context('./', true, /\.js$/);
export default context.keys().filter(key => key !== './index.js').map(key => context(key))
import * as api from '../services/product'

export default {
    namespace: 'product',
    state: {
        products: [
            {
                id: 1,
                title: 'iphone'
            },
            {
                id: 2,
                title: 'xiaomi'
            }
        ],
    },
    reducers:{
        'updateList'(state, { payload }) {
            let arr = deepClone(state.products)
            arr.push({
                id: arr.length+1,
                title: payload
            })
            return {
                products: arr
            }
        }
    },
    effects:{
        *updateListAsync({ payload }, {  put }) {
            yield put({ type: 'updateList', payload });
        },
        *updateListHttp({ payload }, {  call,put }) {
            const {data} = yield call(api.getProduct);
            yield put({ type: 'updateList', payload:data });
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
         window.onresize=()=>{
            dispatch({ type: 'updateList', payload: 'resize' });
         }
        },
        setupHistory({ dispatch, history }) {
            return history.listen(({ pathname, search }) => {
                if (pathname === '/product') {
                    dispatch({ type: 'updateList', payload: 'product' });
                }
            });
        }
    }


}
function deepClone(arr){
    return JSON.parse(JSON.stringify(arr))
}
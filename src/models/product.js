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
        }
    
    }


}
function deepClone(arr){
    return JSON.parse(JSON.stringify(arr))
}
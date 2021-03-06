import default_state from './defaultState'
import * as types from './actionType'

import connect from '@/connect'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actionCreators'
connect.addActions({
    main: actionCreators
})
//纯函数 //
const reducer = (
    previous_state = default_state,
    action
) => {
    let new_state = Object.assign({}, previous_state)
    switch(action.type){
        case types.GET_RECIPE_LIST+'_FULFILLED':
        console.log(action)
        new_state.recipe_list =  action.payload.data.data 
        break;
        default : break;
    }
     
    return new_state
}

export default reducer
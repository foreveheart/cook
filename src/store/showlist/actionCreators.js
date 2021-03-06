import * as types from './actionType'
import axios from 'axios'
import qs from 'qs'
export default {
    getRecipeList(page,link_url){
        return{
            type:types.GET_RECIPE_LIST,
            payload: axios({
                url:`/bwl/api/v1/${link_url}`,
                method:'post',
                data: qs.stringify({
                    pageNumber: page,
                    pageSize: 20,
                    user_id: '4fbe2ab3165646c7b2ccbdd92a37953d',
                    apiversion: 2
                })
            })
        }
    } 
}
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { reducer as todolistReducer } from '../pages/todolist/store/index.js'
import { reducer as loginReducer } from '../pages/login/store/index.js'
import { reducer as homeReducer } from '../pages/home/store/index.js'
import { reducer as userReducer } from '../pages/user/store/'
import { reducer as categoryReducer } from 'pages/category/store'
import { reducer as productReducer } from 'pages/product/store'
import { reducer as adReducer } from 'pages/ad/store'


export default combineReducers({
    login:loginReducer,
    home:homeReducer,
    user:userReducer,
    category:categoryReducer,
    product:productReducer,
    ad:adReducer,
    
    
})
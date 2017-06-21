import { push } from 'react-router-redux'
import * as request from 'superagent'

export default store => next => action => {
    if(typeof action.type === 'undefined' || typeof action.url === 'undefined') return next(action)
    
    // get action types
    let [ pendingType, successType, errorType ] = action.type

    // construct the request
    let {
        url,
        method = 'get',
        dataType = 'json',
        query = {},
        data = {},
    } = action
       
    let req;
    switch (method) {
        case 'post':
            req = request
                .post(url)
                .send(data);
            break;
        case 'delete':
            req = request
                .delete(url);
            break;
        default:
            req = request
                .get(url);
    }
        
    // dispatch the pending action
    next({
        type: pendingType,
        isPending: true
    })
    
    req.end((err, res) => {
        
        if(err){
            return
        }
        
        // successfully pass the result action
        next({
            type: successType,
            isPending: false,
            data: res.body,
            obj: action.obj,
            meta: action.meta
        })
        return
    })
}



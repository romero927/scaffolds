import ActionTypes from '../constants/AppConstants'; 

export default class Actions {
    public static add(){
        return {
            type: ActionTypes.ADD
        }
    }

    public static getapi()
    {
        return {
            type: [ActionTypes.FETCH.API.PENDING, ActionTypes.FETCH.API.SUCCESS, ActionTypes.FETCH.API.ERROR],
            method: 'get',
            url: 'http://api.fixer.io/latest' //Example API URL
        }
    }
}

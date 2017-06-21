import * as React from 'react';
import '../styles/App.scss';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

const logo = require('../resources/logo.svg');

//IMPORT MODEL AND ACTIONS
import { IApp, IAPI, RateValue } from '../models/AppModels'
import Actions  from '../actions/AppActions'

class App extends React.Component<any, any> { //TODO: Not sure why Model wont work
  //RENDER
  render() {
    const { count, data, AddAction, GetAPI } = this.props
    
    //////////////////////////////////////////////////////
    //Example API Return Data and Conditional Rendering
    let APIData:IAPI = new IAPI(data);
    let grid;
    if(APIData.base != undefined)
    {
       let rates = APIData.rates.map((Rate:RateValue) => {
        return  <div>{Rate.name} : {Rate.value}</div>
       })

      grid = 
        <div>
            <div><h2>API Data:</h2></div>
            <div><label>Rates: {APIData.base}</label></div>
            <div><label>Date: {APIData.date}</label></div>
            {rates}
        </div>
    }
    //////////////////////////////////////////////////////

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {count}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {grid}
        <button onClick={GetAPI}>Get API</button>
      </div>
    );
  }

  /***CONSTRUCTORS***/
    //Set Initial Internal State and Bind any internal functions.
    constructor(){
        super();
        this.state = {};
        //EXAMPLE BIND: this.toggle = this.toggle.bind(this);
    }

    /***SUBCOMPONENT GETTERS***/
    //get pagedrawer(){ return(<PageDrawer />); }

    /***REACT LIFECYCLE METHODS***/
    //Executed before rendering, on both server and client side.
    componentWillMount(){ }

    //Executed after first render
    componentDidMount(){ }

    //Invoked as soon as the props are updated before another render called
    componentWillReceiveProps(){ }

    //Called just before Rendering
    componentWillUpdate(){ }

    //Called Just After Updated
    componentDidUpdate(){ }

    //Called after the component is unmounted from the dom
    componentWillUnmount(){ }
}

/***REDUX***/
function mapStateToProps(state:any) {
  let AppState = state.App;
  return {
    count: AppState.count, //create count prop and link to redux state count
    data: AppState.data //create count prop and link to redux state count
  }
}

function mapDispatchToProps(dispatch){
  return {
    AddAction: bindActionCreators(Actions.add, dispatch), //create AddAction function prop and link to Action / Dispatch
    GetAPI: bindActionCreators(Actions.getapi, dispatch) //create GetAPI function prop and link to Action / Dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) //connect redux to react
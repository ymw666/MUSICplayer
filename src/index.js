import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Initial from './InitialPage/initial'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import HomePage from './HomePage/homePage';
import Register from './Register/register'
import registerPage from './Register/register';
import ZhucePage from './zhuce/zhuce';
import FuwuPage from './FuwuPage/fuwu';
import PinlunPage from './pinlun/pinlun'
import PCHeader from './new/new';
import PlacePage from './PlacePage/place';
import PersonalPage from './PersonalPage/personal'
import ShouPage from './ShouPage/shou';
import SayPage from './SayPage/say';
import DingdanPage from './DingdanPage/dingdan'

import succeedPage from './Succeed/succeed'
import ShangcPage from './ShangcPage/shangc'
var indexCss=require("./index.css");


class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <BrowserRouter basename="早餐到">
                    
                        <Switch>
                            <Route path="/" exact component={Initial}></Route>
                            <Route path="/initial" component={Initial}></Route>
                            <Route path="/homePage" component={HomePage}></Route>
                            <Route path="/register" component={registerPage}></Route>
                            <Route path="zhuce" component={ZhucePage}></Route>
                            <Route path="/fuwu" component={FuwuPage}></Route>
                            <Route path="/pinlun" component={PinlunPage}></Route>
                            <Route path="/personal" component={PersonalPage}></Route>
                <Route path='/place' component={PlacePage}></Route>
                <Route path='/shou' component={ShouPage}></Route>
                <Route path='/say' component={SayPage}></Route>
                <Route path='/fuwu' component={FuwuPage}></Route>
                <Route path="/personal" component={PersonalPage}></Route>
                            <Route path="new" component={PCHeader}></Route>
                            <Route path="/dingdan" component={DingdanPage}></Route>
                            <Route path="/shangc" component={ShangcPage}></Route>
                            <Route path="/succeed" component={succeedPage}></Route>

                    
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

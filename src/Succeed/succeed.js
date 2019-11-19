import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'antd';
var succeedPageCss=require('./succeed.css')
export default class succeedPage extends React.Component{
    render(){
        return(
            <div className={succeedPageCss.succeed}>
                 <div className={succeedPageCss.photo}>
                    <img src={require('../img/bingo.png')}  alt=""/>
                </div>
                <div className={succeedPageCss.topic}>
                    <p>支付成功！</p>
                </div>
                <div className={succeedPageCss.return}></div>
                <Link to="/homePage"><Button type="完成" block style={{width:85}}> 支付成功</Button></Link>
            </div>
        )
    }
}
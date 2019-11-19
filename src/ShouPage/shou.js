import React from 'react';
import{Link}from 'react-router-dom'
var ShouCss =require('./shou.css')

export default class ShouPage extends React.Component{
    render(){
        return(
            <div>
                  
                  <div className={ShouCss.f}>
                <div><Link to="/place" className={ShouCss.zuo}><img src={require('../左.png')} alt=''/></Link></div>
                    <div className={ShouCss.shou}><p>编辑收货地址</p></div>
                </div>
                <div className={ShouCss.s}>
                    <p>收货地址：<input type="text"></input></p>
                </div>
                <div className={ShouCss.q}>
                    <p>寝室号：<input type="text"  className={ShouCss.d}></input></p>
                </div>
                <div className={ShouCss.r}>
                    <p>联系人：<input type="text"  className={ShouCss.e}></input></p>
                </div>
                <div className={ShouCss.nannv}> 
                    <div className={ShouCss.nannv1}><input type="radio"  name=" gender" id="male" /><label for="male" >小哥哥</label></div>
                    <div className={ShouCss.nannv2}><input type="radio"  name=" gender" id="male"/><label for="male">小姐姐</label></div>
                </div>
                <div className={ShouCss.s}>
                    <p> 手机号码：<input type="text"  className={ShouCss.l}></input></p>
                </div>
                <Link to="/place">
                <div className={ShouCss.b}>
                保存地址
                </div>
                </Link>
            </div>
        )
    }
}
import React from 'react';
import{Link}from 'react-router-dom'
var SayCss =require('./say.css')

export default class SayPage extends React.Component{
    render(){
        return(
            <div>
            <div className={SayCss.f}>
                <div><Link to="/homePage" className={SayCss.zuo}><img src={require('../左.png')} alt=''/></Link></div>
                    <div className={SayCss.shou}><img src={require('../男孩子.png')} alt=''/>
                    <p>TaeHyung</p></div>
                </div>
                <div className={SayCss.q}>
                <div><img src={require('../男孩子.png')} alt=''/>
                </div>
                <div><p>TaeHyung</p>
                <p>商家:</p>
                <p><img src={require('../星.png')} alt=''/>
                <img src={require('../星.png')} alt=''/>
                <img src={require('../星.png')} alt=''/>
                <img src={require('../星.png')} alt=''/>
                <img src={require('../星.png')} alt=''/>     美团专送  38分钟送达</p></div>
                </div>
                <div className={SayCss.p}>
                    <p>#沙拉牛排+脆皮鸡+荷包蛋+时蔬+赠汤#</p>
                </div>
                <div className={SayCss.s}>
                    <a href="" className={SayCss.z}>删除</a>
                    <div><img src={require('../点赞.png')} alt=''/></div>
                </div>
                </div>
                
        )
    }
}
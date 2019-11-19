
import React from 'react'

import{Link}from 'react-router-dom'
var PersonalCss =require('./personal.css')



export default class PersonalPage extends React.Component{
    render(){
        return(
            
            
        <div className={PersonalCss.h}>
       
            <div className={PersonalCss.personal}>
                <div>
            <p > 
                <img src={require('../男孩子.png')} alt=''/>
                </p></div>
                <div> <p className={PersonalCss.yhm}>用户名</p>
                <p>TaeHyung</p></div>
                
            </div>
            <div className={PersonalCss.second}>
               
               <p className={PersonalCss.my}>我的功能</p>
            </div>
            <div>
               
               
<div className={PersonalCss.zhong}>
                
                
                <div className={PersonalCss.dizhi}>
                    <div className={PersonalCss.dizhi1}>
                   <div><a href='/place'><img src={require('../我的地址.png')} alt=''/></a></div> 
               <div> <Link to="/place" className={PersonalCss.dizhi2}>我的地址</Link></div> 
                
                </div>
                </div>
 
 
 <div className={PersonalCss.say}>
 <div className={PersonalCss.say1}>
 <div><Link to="/say"><img src={require('../我的评价.png')} alt=''/></Link></div>
     <div><Link to="/say" className={PersonalCss.say2}>我的评价</Link></div>
     
     
 </div>
 </div>

<div  className={PersonalCss.fuwu}>
<div className={PersonalCss.fuwu1}>
    <div><Link to="/fuwu"><img src={require('../帮助.png')} alt=''/></Link></div>
    <div><Link to="/fuwu" className={PersonalCss.fuwu2}>帮助</Link></div>
     </div></div>
 
 
 </div>
            </div>
            <div className={PersonalCss.last}>
            <div className={PersonalCss.daohang}>
         <div className={PersonalCss.text}>   
             <p><img src={require('../首页.png')} alt=''/></p>
            <p>首页</p>
            </div>
        <div className={PersonalCss.text1}>    <Link to="/gouwu"><p><img src={require('../购物车.png')} alt=''/></p></Link>
            <p >购物车</p>
            </div>
            <div className={PersonalCss.text2}><p><img src={require('../订单.png')} alt=''/></p>
            <p>订单</p></div>
            <div className={PersonalCss.text3}><p><img src={require('../我的.png')} alt=''/></p>
            <p>我的</p></div>
           
            </div>
            
              
            </div>
            
        </div> 
        )
    }
}

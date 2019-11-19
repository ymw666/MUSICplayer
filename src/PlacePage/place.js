import React from 'react'
import{Link}from 'react-router-dom'
var PlaceCss =require('./place.css')
export default class PlacePage extends React.Component{
    render(){
        return(
            <div className={PlaceCss.Placess}>
                 
                <div className={PlaceCss.f}>
                <div><Link to="/homePage" className={PlaceCss.zuo}><img src={require('../左.png')} alt=''/></Link></div>
                    <div className={PlaceCss.shou}><p>我的收货地址</p></div>
                </div>
                <div className={PlaceCss.xin1}>
                <div className={PlaceCss.xin}>
                    <p>地址：<input type="text"></input></p>
                    <p>姓名：<input type="text"  className={PlaceCss.d}></input></p>
                    <p>电话：<input type="text"  className={PlaceCss.h}></input></p></div>
                
                    <div className={PlaceCss.bian}><Link to='/shou'><img src={require('../编辑.png')} alt=''/> </Link></div>
                </div>
                <div className={PlaceCss.xin1}>
                <div className={PlaceCss.xin}>
                    <p>地址：<input type="text" ></input></p>
                    <div><p>姓名：<input type="text"  className={PlaceCss.d}></input></p></div>
                    <div><p>电话：<input type="text"  className={PlaceCss.h}></input></p></div></div>
                    <div className={PlaceCss.bian}><Link to='/shou'><img src={require('../编辑.png')} alt=''/> </Link></div>
                </div>
                <div className={PlaceCss.xin1}>
                <div className={PlaceCss.xin}>
                    <p>地址：<input type="text"></input></p>
                    <div><p>姓名：<input type="text"  className={PlaceCss.d}></input></p></div>
                    <div><p>电话：<input type="text"  className={PlaceCss.h}></input></p></div></div>
                    <div className={PlaceCss.bian}><Link to='/shou'><img src={require('../编辑.png')} alt=''/> </Link></div>
                </div>
                <Link to="/personal">
                <div className={PlaceCss.last}>完成
                </div></Link>
            </div>
        )
    }
}
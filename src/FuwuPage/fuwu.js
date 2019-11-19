import React from 'react'
import{Link}from 'react-router-dom'
var FuwuCss =require('./fuwu.css')
export default class FuwuPage extends React.Component{
    render(){
        return(
            <div>
 <div className={FuwuCss.diyi}>
                <div><Link to="/homePage" className={FuwuCss.zuo}><img src={require('../左.png')} alt=''/></Link></div>
                    <div className={FuwuCss.shou}><p>帮助与反馈</p></div>
                </div>
                <div className={FuwuCss.fankui1}><input type="text" className={FuwuCss.fankui}></input></div>
                <div className={FuwuCss.kong}>

                </div>
                <div className={FuwuCss.fankui2}><input type="text" className={FuwuCss.fankui3}></input></div>
            <Link to="/personal"><div className={FuwuCss.fankui4}>提交反馈</div></Link>
            </div>
        )
    }
}
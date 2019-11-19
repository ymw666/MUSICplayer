import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom'
var ShangCss =require('./shang.css')

const { Meta } = Card;

export default class ShangPage extends React.Component{
    render(){
        return(
            <div className={ShangCss.f}>
            <div className={ShangCss.mian}>
              <Link to="/dingdan">
            <Card
            hoverable
            style={{ width: 500}}
            cover={<img src={require('../img/油条(1).jpg')} alt=''/>}
          >
            <Meta title="香喷喷蛇皮油条" description="￥2" />
          </Card></Link>
           <Card
           hoverable
           style={{ width:500 }}
           cover={<img src={require('../img/饺子.jpg')} alt=''/>}
         >
           <Meta title="喷香渔夫水饺" description="￥2" />
         </Card>
         </div>
         <div className={ShangCss.mian1}>
         <Card
           hoverable
           style={{ width: 500 }}
           cover={<img src={require('../img/煎饼.jpg')} alt=''/>}
         >
           <Meta title="油炸葱香煎饼" description="￥2" />
         </Card>
         
         
         <Card
           hoverable
           style={{ width: 500 }}
           cover={<img src={require('../img/面条.jpg')} alt=''/>}
         >
           <Meta title="卤香面条" description="￥2" />
         </Card>
         </div >
         <div className={ShangCss.mian2}>
         <Card
           hoverable
           style={{ width: 500 }}
           cover={<img src={require('../img/锅魁.jpg')} alt=''/>}
         >
           <Meta title="锅魁" description="￥2" />
         </Card>
         <Card
           hoverable
           style={{ width: 500 }}
           cover={<img src={require('../img/包子.jpg')} alt=''/>}
         >
           <Meta title="狗不理包子" description="￥2" />
         </Card>
         </div>
         <div className={ShangCss.mian3}>
         <Card
           hoverable
           style={{ width: 500 }}
           cover={<img src={require('../img/豆浆.jpg')} alt=''/>}
         >
           <Meta title="原磨豆浆" description="￥2" />
         </Card>
         <Card
           hoverable
           style={{ width: 500 }}
           cover={<img src={require('../img/粥.jpg')} alt=''/>}
         >
           <Meta title="皮蛋廋肉粥" description="￥2" />
         </Card>
         </div>
         </div>
        )
    }
}

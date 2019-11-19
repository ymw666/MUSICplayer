import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom'
import ZhifuPage from '../zhifu/zhifu';
var DingCss =require('./ding.css')

const { Meta } = Card;

export default class DingPage extends React.Component{
    render(){
        return(
            <div>
<div className={DingCss.you}>

    <div>
    <Card
            hoverable
            style={{ width: 500}}
            cover={<img src={require('../img/油条(1).jpg')} alt=''/>}
          >
            <Meta title="香喷喷蛇皮油条" description="" />
          </Card>
    </div>
    <div>
    <div style={{ background: '#ECECEC', padding: '120px' }}>
    <Card title="香喷喷蛇皮油条" bordered={false} style={{ width: 1000 }}>
      <p></p>
      <p></p>
      <p>￥2</p>
    </Card>
  </div>
    </div>
</div>
<div className={DingCss.you}>
    <div>
    <Card
            hoverable
            style={{ width: 500}}
            cover={<img src={require('../img/粥.jpg')} alt=''/>}
          >
            <Meta title="皮蛋廋肉粥" description="" />
          </Card>
    </div>
    <div className={DingCss.you1}>
    <div style={{ background: '#ECECEC', padding: '120px' }}>
    <Card title="皮蛋廋肉粥" bordered={false} style={{ width: 1000 }}>
      <p></p>
      <p></p>
      <p>￥2</p>
    </Card>
  </div>
  <div><ZhifuPage></ZhifuPage></div>
    </div>
</div>
</div>
        )
    }}
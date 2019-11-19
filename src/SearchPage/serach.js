import React from 'react';
import { Tabs } from 'antd';
var SearchPageCss=require('./serach.css')
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class SearchPage extends React.Component {
  render(){
    return(
      <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab=" 星期 一" key="1">
        <div className={SearchPageCss.font}>
          周一为番茄鸡蛋面。材料有番茄、鸡蛋、碎肉、小青菜、宽面条。番茄中含有丰富的维生素A、C及D,其酸性是由于柠檬酸及苹果酸所致，含有的维生素,比苹果、梨、香蕉、葡萄等都高出2倍，鸡蛋和瘦肉更是孩子发育成长中必不可少的。此面的做法简单方便，特别适合冬天可以吃到热乎乎的早餐。
          <img src={require('../img/teach.png')} alt=""/> 
        </div>
      </TabPane>
      <TabPane tab="星期 二" key="2">
        <div className={SearchPageCss.font2}>
          周二我们吃蔬菜煎饼配豆浆。蔬菜饼和豆浆都是营养丰富的食品，两者配一起更可以互相促进吸收。可以头天晚上做好煎饼，第二天早上起来放微波炉加热，豆浆则需要现做。
          <img src={require('../img/teach2.png')} alt=""/>
          </div>
      
      </TabPane>
      <TabPane tab="星期 三" key="3">
      <div className={SearchPageCss.font3}>
      周三小家伙要换蛋糕配奶味玉米汁。纯纯牛奶再混合清甜的玉米汁，配上一小块蛋糕，真是美味可口又营养
      <img src={require('../img/teach3.png')} alt=""/>
      </div>
      </TabPane>
      <TabPane tab="星期 四" key="4">
      <div className={SearchPageCss.font4}>
      周四做胡萝卜玉米早餐饼。胡萝卜肉质细密，质地脆嫩，有特殊的甜味，并含有丰富的胡萝卜素，维生素C和B族维生素，与玉米配合一起煎饼好吃又营养。
      <img src={require('../img/teach4.png')} alt=""/>
      </div>
      </TabPane>
      <TabPane tab="星期 五" key="5">
      <div className={SearchPageCss.font5}>
      周五体能消耗大，要吃葱花蛋炒饭。虽然是一道简单的早餐，但特别适合上午能量消耗比较大的孩子哦，一句话营养又耐饥！
      <img src={require('../img/teach5.png')} alt=""/>
      </div>
      </TabPane>
      <TabPane tab="星期 六" key="6">
      <div className={SearchPageCss.font6}>
        周六休息换西式口味：西式煎饼加牛奶。吃腻了中式早餐也得换换口味吧，周六我们就来一道西式的煎饼加牛奶吧，味道还是很好的哦。
        <img src={require('../img/teach6.png')} alt=""/>
        </div>
      </TabPane>
      <TabPane tab="星期 天" key="7">
      <div className={SearchPageCss.font7}>
      周日我们的时间比较多，我们就自作三明治好了。多种蔬菜配鸡蛋再加火腿，真是营养美味不得了啊！
      <img src={require('../img/teach7.png')} alt=""/>
      </div>
      </TabPane>
    </Tabs>
    )
  }
}
  
  
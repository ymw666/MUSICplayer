import React from 'react';
import { Tabs } from 'antd';
import Buzhou from './buzhou';
import Buzhou1 from '../buzhou1/buzhou1';
import Buzhou2 from '../buzhou2/buzhou2';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
export default class Step extends React.Component{
    render(){
        return(
            <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="煎蛋制作" key="1">
      <Buzhou></Buzhou>
    </TabPane>
    <TabPane tab="三明治制作" key="2">
      <Buzhou1></Buzhou1>
    </TabPane>
    <TabPane tab="皮蛋瘦肉粥" key="3">
      <Buzhou2></Buzhou2>
    </TabPane>
  </Tabs>       
        )
    }
}

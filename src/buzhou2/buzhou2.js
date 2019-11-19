import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;
export default class Buzhou2 extends React.Component{
    render(){
        return(
            <Steps direction="vertical" current={1}>
    <Step title="食材准备" description="将大米淘洗干净，放入水，倒入香油搅匀后放置一旁，浸泡30分钟。姜去皮切成细丝，香葱切碎。皮蛋切成小块，把肉先切成片，再切丝，最后切成小颗粒。放入碗中，加入1/4茶匙（1克）盐，搅匀后腌制20分钟。" />
    <Step title="下锅准备" description="锅中倒入清水，大火煮开后，将肉粒倒入煮一会儿，当水面有浮沫时，用勺子彻底撇干净，然后倒入一半的皮蛋块，再倒入姜丝，煮约2分钟后，倒入浸泡后的米，改成小火煮40分钟，期间每隔5分钟用勺子沿同一方向搅拌一次，以免皮蛋黏锅底。" />
    <Step title="起锅" description="锅中倒入清水，大火煮开后，将肉粒倒入煮一会儿，当水面有浮沫时，用勺子彻底撇干净，然后倒入一半的皮蛋块，再倒入姜丝，煮约2分钟后，倒入浸泡后的米，改成小火煮40分钟，期间每隔5分钟用勺子沿同一方向搅拌一次，以免皮蛋黏锅底。" />
  </Steps>
        )
    }
}
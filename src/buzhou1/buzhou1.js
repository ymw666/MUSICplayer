import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;
export default class Buzhou1 extends React.Component{
    render(){
        return(
            <Steps direction="vertical" current={1}>
    <Step title="准备工作" description="土司切去四周的边备用，鸡蛋打入碗里，加入牛奶，适量盐和黑胡椒粉。打匀。" />
    <Step title="开始制作" description="取一吐司片，先放一片芝士，再放一片火腿，再放一片芝士，最后再盖上一片吐司。" />
    <Step title="开火制作" description="开启小火，锅里倒适量橄榄油，双手握住夹好了馅料的土司片，放入蛋液中蘸一下，再翻面蘸一下，让蛋液包裹整个土司片。（此步要快速，不要让土司片浸泡蛋液太久）放入锅内，煎至两面金黄" />
    <Step title="打包工作" description="对切后装盘，可淋上蕃茄酱调味,配一杯自制酸奶，营养满满的早餐时光。"/>
  </Steps>
        )
    }
}
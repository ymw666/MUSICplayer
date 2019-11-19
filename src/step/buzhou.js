import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;
export default class Buzhou extends React.Component{
    render(){
        return(
            <Steps direction="vertical" size="small" current={1}>
                
    <Step title="干锅烧热" description="可以用手在锅的表面感受一下，感觉热了就关掉火" font-size={50}/>
    <Step title="关火加油" description="关火后倒入几滴油，不用放太多，一点点就可以了" />
    
    <Step title="加盐" description="散入半小勺盐，把锅晃一下，使油均匀（锅中撒入盐，还可以防止鸡蛋粘锅）。" />
    <Step title="加蛋" description="打入一个鸡蛋，不要翻动。" font-size={50}/>
    <Step title="加水" description=" 倒入少许清水（清水可以降温，并产生水蒸气），这个时候可以开小火，听见噼里啪啦的声音后关火。" font-size={50}/>
    <Step title="最后" description="盖上锅盖，用锅里的余温来热熟鸡蛋，3-5分钟后就可以了。" font-size={50}/>

  </Steps>
        )
    }
}
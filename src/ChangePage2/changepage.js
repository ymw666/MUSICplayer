import React from 'react'
import { Carousel } from 'antd';

export default class ChangePage extends React.Component{
  render(){
    return(
      <Carousel autoplay>
    <div>
      <h3><img src={require('../美食7.jpg')} alt=''/></h3>
    </div>
    <div>
      <h3><img src={require('../美食6.jpg')} alt=''/></h3>
    </div>
    <div>
      <h3><img src={require('../美食5.jpg')} alt=''/></h3>
    </div>
    
  </Carousel>
    )
  }
}
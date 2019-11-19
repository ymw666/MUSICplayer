import React from 'react'
import { Carousel } from 'antd';

export default class LunbotuPage extends React.Component{
  render(){
    return(
      <Carousel autoplay>
    <div>
      <h3><img src={require('../美食1.jpg')} alt=''/></h3>
    </div>
    <div>
      <h3><img src={require('../美食2.jpg')} alt=''/></h3>
    </div>
    <div>
      <h3><img src={require('../美食3.jpg')} alt=''/></h3>
    </div>
    <div>
      <h3><img src={require('../美食4.jpg')} alt=''/></h3>
    </div>
  </Carousel>
    )
  }
}

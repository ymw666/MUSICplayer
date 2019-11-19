import React from 'react';
import { Drawer, Button } from 'antd';
import{Link}from 'react-router-dom'
var PersonalCss =require('./personal.css')  
export default class Order extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <div>
          
        <Button type="primary" onClick={this.showDrawer}>
          个人中心
        </Button>
        <Drawer
          title="个人信息"
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
            <div className={PersonalCss.h}>
       
       <div className={PersonalCss.personal}>
           <div>
       <p > 
           <img src={require('../男孩子.png')} alt=''/>
           </p></div>
           <div> <p className={PersonalCss.yhm}>用户名</p>
           <p>TaeHyung</p></div>
           
       </div>
      
       <div>
          
          
<div className={PersonalCss.zhong}>
           
           
           <div className={PersonalCss.dizhi}>
               <div className={PersonalCss.dizhi1}>
              <div><a href='/place'><img src={require('../我的地址.png')} alt=''/></a></div> 
          <div> <Link to="/place" className={PersonalCss.dizhi2}>地址</Link></div> 
           
           </div>
           </div>


<div className={PersonalCss.say}>
<div className={PersonalCss.say1}>
<div><Link to="/say"><img src={require('../我的评价.png')} alt=''/></Link></div>
<div><Link to="/say" className={PersonalCss.say2}>评价</Link></div>


</div>
</div>

<div  className={PersonalCss.fuwu}>
<div className={PersonalCss.fuwu1}>
<div><Link to="/fuwu"><img src={require('../帮助.png')} alt=''/></Link></div>
<div><Link to="/fuwu" className={PersonalCss.fuwu2}>帮助</Link></div>
</div></div>


</div>
       </div>
       <div className={PersonalCss.last}>
       <div className={PersonalCss.daohang}>
  
   <div className={PersonalCss.text1}>    <Link to="/shangc"><p><img src={require('../购物车.png')} alt=''/></p>
       <p >商城</p></Link>
       </div>
       <div className={PersonalCss.text2}><Link to="/dingdan"><p><img src={require('../订单.png')} alt=''/></p>
       <p>订单</p></Link></div>
       <div className={PersonalCss.text3}><p><img src={require('../我的.png')} alt=''/></p>
       <p>我的</p></div>
      
       </div>
       
         
       </div>
       
   </div> 

         

          
          <Drawer
            title="Two-level Drawer"
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
            This is two-level drawer
          </Drawer>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              返回首页
            </Button>
           <Link to=""> <Button onClick={this.onClose} type="primary">
             退出登录
            </Button></Link>
          </div>
        </Drawer>
      </div>
    );
  }
}



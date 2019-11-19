// import React from 'react'
// import Header from '../Header/header'
// import HBody from '../HBody/hbody'
// import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
// import { Icon, Row, Col, Menu, Dropdown, message, Button, Avatar, Input } from 'antd'
// // var img1 = require('../imgs/title2.jpg')
// const menu = (
//     <Menu onClick={handleMenuClick}>
//         <Menu.Item key="1">
//             <Link to="/initial">退出当前用户</Link>
//         </Menu.Item>
//     </Menu>
// );
// var HomePageCss = require("./homePage.css")

// function handleButtonClick(e) {
//     message.info('Click on left button.');
//     console.log('click left button', e);
// }

// function handleMenuClick(e) {
//     message.info('已退出当前用户！');
//     console.log('click', e);
// }

// export default class HomePage extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header /><br></br>
//                 <div className={HomePageCss.Icon1}>
//                     <div className={HomePageCss.store}>
//                         <Row>
//                             <Col span={6}>
//                                 <div className={HomePageCss.store1}>
//                                 <Icon type="home" />
//                                 <Link to="/buyPage">早餐到</Link>
//                                 </div>
//                             </Col>
//                             <Col span={6}>
//                                 {/* <img src={img1}></img> */}
//                             </Col>
//                             <Col span={7}>
//                                 <Input.Search placeholder="请输入想搜索的内容" onSearch={value => console.log(value)} enterButton />
//                             </Col>
//                             <Col span={3} className={HomePageCss.user}>
//                                 欢迎您：<Link to="/userPage"><Avatar icon="user" />用户</Link>
//                             </Col>
//                             <Col span={2} className={HomePageCss.select}>
//                                 <Dropdown overlay={menu}>
//                                     <Button >设置
//                                     <Icon type="down" />
//                                     </Button>
//                                 </Dropdown>
//                             </Col>
//                         </Row>
//                     </div>
//                 </div>
//                 <div>
//                     <HBody />
//                 </div>
//             </div>
//         )
//     }
// }
import React from 'react';
import { Layout, Menu, Icon, Input,Row, Col, Avatar } from 'antd';
import SearchPage from '../SearchPage/serach';
import LunbotuPage from '../ChangePage/ReactCarousel';
import ChangePage from '../ChangePage2/changepage';
import {Link} from 'react-router-dom'
import CommentPage from '../comment/comment';
import Draw from '../draw/draw';
import Draw1 from '../draw1/draw1';
import Order from '../order/order';
import Step from '../step/step';

const { Header, Content, Footer, Sider } = Layout;


export default class HomePage extends React.Component{
    render(){
        return(
            <Layout>
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
              }}
            >
              <div className="logo" />
              
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                  <Link to ="homePage"><Icon type="user" />
                  <span className="nav-text">首页</span></Link>
                  
                </Menu.Item>
                <Menu.Item key="1">
                  <Link to ="shangc"><Icon type="user" />
                  <span className="nav-text">商城</span></Link>
                  
                </Menu.Item>
                <Menu.Item key="1">
                  <Link to ="dingdan"><Icon type="user" />
                  <span className="nav-text">订单</span></Link>
                  
                </Menu.Item>
               
              </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
              <Header style={{ background: '#fff', padding: 0 }}>
              <div>
    <Row>
      <Col span={12} >
     <Link to="registwer"><Icon type="coffee" /> 任何一种爱，都不比对美食的热爱真切只要告诉我你爱吃什么，我就能知道你是什么样的人红酒是瓶装的诗.</Link>
      </Col>
      <Col span={4} >
      <Avatar style={{ backgroundColor: '#87d068' }} icon="user" /><Link to="/initial">登陆/注册</Link>
      </Col>
      <Col span={6}>
      
     
     
     
       </Col>
       <Col span={2}><Order></Order></Col>
    </Row>
  </div>
              
             
            
              </Header>
              
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <div>
    <Row>
      <Col span={11}><SearchPage></SearchPage></Col>
      <Col span={13 }><LunbotuPage></LunbotuPage></Col>
      
    </Row>
   
    
  </div>
 
    <Row>
      <Col span={12}><ChangePage></ChangePage></Col>
      <Col span={4}></Col>
      <Col span={8}><Step></Step></Col>
      
    </Row>
                </div>
                
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              
              </Footer>
            </Layout>
          </Layout>
        )
    }
}

import React from 'react';
import { Layout, Menu, Icon, Input,Row, Col, Avatar } from 'antd';
import {Link} from 'react-router-dom'
import DingPage from '../DingPage/ding';

const { Header, Content, Footer, Sider } = Layout;


export default class DingdanPage extends React.Component{
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
      <Avatar style={{ backgroundColor: '#87d068' }} icon="user" /><Link to="/register">登陆/注册</Link>
      </Col>
      <Col span={6}>
      
     
     
     
       </Col>
       <Col span={2}></Col>
    </Row>
  </div>
              
             
            
              </Header>
              
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <div>
    <Row>
      <Col span={11}><DingPage></DingPage></Col>
      <Col span={13 }></Col>
      
    </Row>
   
    
  </div>
               
  <Row>
      <Col span={6}><Link to="/homePage"><Icon type="home" theme="twoTone" />首页</Link></Col>
      <Col span={6}><Link to="/dingdan"><Icon type="profile" theme="twoTone" />订单</Link></Col>
      <Col span={6}><Link to="/shangc"><Icon type="shopping-cart" />商城</Link></Col>
      <Col span={6}><Link to="say"><Icon type="idcard" theme="twoTone" />我的</Link></Col>
    </Row>    
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        )
    }
}

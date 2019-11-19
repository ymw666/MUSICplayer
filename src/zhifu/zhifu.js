import React from 'react'
import{Link, }from 'react-router-dom'
import zhifubao from '../img/zhifubao.png'
import { Modal, Button } from 'antd';


export default class ZhifuPage extends React.Component{
    state = {
        loading: false,
        visible: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    
      render() {
        const { visible, loading } = this.state;
        return (
          <div>
            <Button type="primary" onClick={this.showModal}>
             点击支付
            </Button>
            <Modal
              visible={visible}
              title="支付界面"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>
                  放弃支付
                </Button>,
               <Link to="/succeed"> <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  确认支付
                </Button></Link>
              ]}
            >
              <p></p>
              <p><img src={zhifubao} alt=""/></p>
             
            </Modal>
          </div>
        );
      }
    }
    
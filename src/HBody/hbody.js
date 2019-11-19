import React from 'react'
import { Button, Row, Col, Input, Popover, Upload, Tooltip, Icon, message, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
const content1 = (
    <div>
        <p>刷新</p>
    </div>
);

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

var HBodyCss = require("./hbody.css")

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

export default class HBody extends React.Component {
    render() {
        return (
            <div>
                <div className={HBodyCss.all}>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={4}>
                            <Button type="danger" size={18} block><Link>首页</Link></Button>
                        </Col>
                        <Col span={4}>
                            <Button type="danger" size={18} block><Link>最新</Link></Button>
                        </Col>
                        <Col span={4}>
                            <Button type="danger" size={18} block><Link>热议</Link></Button>
                        </Col>
                        <Col span={4}>
                            <Button type="danger" size={18} block><Link>专家</Link></Button>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                </div>
                <div className={HBodyCss.content}>
                    <Row>
                        <Col span={4} className={HBodyCss.fill}></Col>
                        <Col span={16}></Col>
                        <Col span={4} className={HBodyCss.fill}>
                            <Col span={2} >
                                <Popover placement="right" content={content1} trigger="hover">
                                    <Button type="primary" icon="retweet" size="large" className={HBodyCss.icon1} /><br></br><br></br>
                                </Popover>
                                <Button type="primary" icon="plus" size="large" className={HBodyCss.icon1} /><br></br><br></br>
                                <Button type="primary" icon="customer-service" size="large" className={HBodyCss.icon1} />
                            </Col>
                            <Col span={2}></Col>
                        </Col>
                    </Row>
                    <div className={HBodyCss.transition}></div>
                    <div>
                        <Row className={HBodyCss.tail}>
                            <Col span={4}></Col>
                            <Col span={2}>
                                <div>发表新话题：</div><br></br>
                            </Col>
                            <Col span={14}><Input className={HBodyCss.Input} placeholder="##请输入您想发表的话题"></Input></Col>
                            <br></br>
                            <br></br>
                            <Col span={4}></Col>
                        </Row>
                    </div>
                    <div className={HBodyCss.tail2}>
                        <Row >
                            <Col span={4}></Col>
                            <Col span={14}><Input.TextArea placeholder="请输入您想发表的内容......" autosize={{ minRows: 2, maxRows: 6 }} className={HBodyCss.box} />
                            <Checkbox onChange={onChange}>同时发布到我的动态</Checkbox>
                            </Col>
                            <Col span={2}><Upload {...props}>
                                <Button size="small">
                                    +<Icon type="picture" />
                                </Button>
                            </Upload>
                                <Button type="primary" >发送</Button>
                            </Col>
                            <Col span={4}>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
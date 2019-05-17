import React, {Component} from 'react';
import { Row,Col,Typography,List } from 'antd';
import {Menu, Icon} from 'antd';


const { Title } = Typography;
const data = [
    { name:'Address',icons:'environment',content:"Jl. Lempuyangan Tengah, Yogyakarta"},
    { name:'Phone',icons:'phone',content:"+62 852-2859-9018"},
    { name:'Email',icons:'mail',content:"icinbachan15@gmail.com"},
  ];

class Contact extends Component {
    render() {
        return (
            <div>
                 <Row>
                 <Col xs={12}>
                        <Row style={{ margin: '16px 16px' }}>
                            <Col xs><Title>Shintya Devi Bachan</Title></Col>
                            <List
                                size="large"
                                // header={<div>Header</div>}
                                // footer={<div>Footer</div>}
                                // bordered
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <Icon type={item.icons} theme="filled"/> &nbsp;&nbsp; &nbsp;
                                        <Typography.Text strong>{item.name} : </Typography.Text> {item.content}
                                    </List.Item>
                                )}
                            />
                            <Col xs><Title level={4}>uyetfsbjhggsefffdnmb</Title></Col>
                            <Col xs>dfjgyerbgnsbcausdwwhjndbcysgywbkjnkdkjs</Col>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row>
                            <img src="assets/images/profile/kambing.png" style={{objectFit:"cover",width:"100%"}}/>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;
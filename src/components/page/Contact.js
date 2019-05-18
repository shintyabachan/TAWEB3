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
                        <h3>Let's Keep in Touch</h3>
                                    <form action="#">
                                        <div className="input-grup">
                                            <input type="text" placeholder="Enter your Name" id="name"
                                                name="Enter your Name"/>
                                            <input type="text" placeholder="Company " id="Company"
                                                name="Companyname"/>
                                            <input type="email" placeholder="Enter Your Email address "
                                                id="email" name="email"/>
                                            <input type="text" placeholder="Enter your phone Number"
                                                id="phonenumber" name="phonenumber"/>
                                        </div>
                                        <div className="checkbox-grup">
                                            <div className="single-check">
                                                <input type="checkbox" id="Webdesign"/>
                                                <label htmlFor="Webdesign">Web design</label>
                                            </div>
                                            <div className="single-check">
                                                <input type="checkbox" id="Graphicdesign"/>
                                                <label htmlFor="Graphicdesign">Graphic design</label>
                                            </div>
                                            <div className="single-check">
                                                <input type="checkbox" id="uxdesign"/>
                                                <label htmlFor="uxdesign">UX Design</label>
                                            </div>
                                            <div className="single-check">
                                                <input type="checkbox" id="Gamedesign"/>
                                                <label htmlFor="Gamedesign">Game design</label>
                                            </div>
                                            <div className="single-check">
                                                <input type="checkbox" id="WebDevelopment"/>
                                                <label htmlFor="WebDevelopment">Web Development</label>
                                            </div>
                                            <div className="single-check">
                                                <input type="checkbox" id="UIDesign"/>
                                                <label htmlFor="UIDesign">UI Design</label>
                                            </div>
                                        </div>
                                        <div className="messages-area">
                                            <textarea name="message" id="message" cols="30" rows="10"
                                                placeholder="Write your message"></textarea>
                                        </div>
                                        <div className="submit-btn text-right">
                                            <button className="btn ">Submit</button>
                                        </div>
                                    </form>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;
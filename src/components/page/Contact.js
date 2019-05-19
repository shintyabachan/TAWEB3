import React, {Component} from 'react';
import { Row, Col, Typography, Card, Form, Icon, Input, Button } from 'antd';
import SimpleMap from '../SimpleMap';
import TextArea from 'antd/lib/input/TextArea';

class Kontak extends Component {
    render() {
        return (
            <div>
                <Row 
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    >
                    {/* Kolom konten contact */}
                    <Col xs={10}>
                        <Row style={{ margin: '16px 16px'}}>
                            <Card title="C O N T A C T" bordered={false} style={{ width: 300 }}>
                            <p>Nama : Shintya Devi Bachan</p>
                            <p>No &nbsp; &nbsp;&nbsp; : +62895432456433</p>
                            <p>Email &nbsp; : icinbachan15@gmail.com</p>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    <Input 
                                        style={{marginBottom: "8px" }}
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                        placeholder="Nama"
                                    />
                                    <Input 
                                        style={{marginBottom: "8px" }}
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                        placeholder="Email"
                                    />
                                    <Input 
                                        style={{marginBottom: "8px" }}
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                        placeholder="Website"
                                    />
                                    <TextArea 
                                        style={{marginBottom: "8px" }}
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                        placeholder="Message"
                                    />
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Send
                                    </Button>
                                </Form.Item>
                            </Form>
                            </Card>
                        </Row>
                    </Col>
                    {/* Colom konten map*/}
                    <Col xs={14} style={{ padding:"20px" }}>
                        <SimpleMap/>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Kontak;
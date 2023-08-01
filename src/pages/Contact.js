import {
    Typography,
    Carousel,
    Image,
    Row,
    Col,
    Card,
    Tag,
    Button,
    Input,
    Select,
    InputNumber,
    DatePicker,
    AutoComplete,
    Cascader,
    Mentions,
    Form,
    notification
} from 'antd';
import {InfoCircleOutlined} from "@ant-design/icons";
import React, {useState} from "react";
const { Title, Paragraph, Text, Link } = Typography;
const { TextArea } = Input;

const Contact = (props) => {
    const [form] = Form.useForm();
    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            console.log('Submit:', values);
            openNotification();
            onReset();
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    };

    const onReset = () => {
        form.resetFields();
    };
    const openNotification = () => {
        notification.open({
            type: 'success',
            message: 'Thành công',
            description: 'Bạn đã gửi lời nhắn cho chúng tôi thành công',
        });
    };
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
                marginBottom: 20
            }}>
                <Typography style={{
                    margin: '10px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Title style={{
                        color: '#353348'
                    }}>Liên hệ</Title>
                    <Paragraph style={{
                        fontStyle: 'italic',
                        maxWidth: 600,
                        textAlign: 'center'
                    }}>
                        In the process of internal desktop applications development, many different design specs and
                        implementations
                    </Paragraph>
                </Typography>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{
                            padding: '0 20px'
                        }}>
                            <Form.Item
                                name="Họ"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Họ là bắt buộc'
                                    },
                                ]}
                                label="Họ"
                                tooltip="*Họ là bắt buộc"
                            >
                                <Input placeholder="Tran" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{
                            padding: '0 20px'
                        }}>
                            <Form.Item
                                name="Tên"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Tên là bắt buộc'
                                    },
                                ]}
                                label="Tên"
                                tooltip="*Tên là bắt buộc"
                            >
                                <Input placeholder="Tony" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{
                            padding: '0 20px'
                        }}>
                            <Form.Item
                                name="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Email là bắt buộc'
                                    },
                                    {
                                        type: "email",
                                        message: 'Email không đúng định dạng'
                                    }
                                ]}
                                label="Email"
                                tooltip="*Email là bắt buộc"
                            >
                                <Input placeholder="trandinhthang99.hy@gmail.com" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{
                            padding: '0 20px'
                        }}>
                            <Form.Item
                                name="Số điện thoại"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Số điện thoại là bắt buộc'
                                    },
                                ]}
                                label="Số điện thoại"
                                tooltip="*Số điện thoại là bắt buộc"
                            >
                                <Input placeholder="0337724134" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
                            padding: '0 20px'
                        }}>
                            <Form.Item
                                name="Lời nhắn"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Lời nhắn là bắt buộc'
                                    },

                                ]}
                                label="Lời nhắn"
                                tooltip="*Lời nhắn là bắt buộc"
                            >
                                <TextArea
                                    rows={5}
                                    showCount
                                    maxLength={500}
                                    placeholder="Viết bất cứ lời nhắn nào muốn gửi đến với chúng tôi..."
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
                            padding: '0 20px',
                            marginTop: 20,
                            textAlign: 'center'
                        }}>
                            <Button htmlType="submit" type="primary">Gửi cho chúng tôi</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}
export default Contact;
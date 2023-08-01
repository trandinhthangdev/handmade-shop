import {Carousel, Image, Row, Col, Card, Tag, Button, Input, Form, notification} from 'antd';
import {DownloadOutlined, InfoCircleOutlined, SearchOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {formatter} from "../constants/constants";
import {carts} from "../data/cart";
import { useHistory } from "react-router-dom";
import * as links from "./../constants/links";
const { TextArea } = Input;

const CheckOut = (props) => {
    const [form] = Form.useForm();
    let history = useHistory();
    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            console.log('Submit:', values);
            openNotification();
            history.push(links.CHECK_OUT_SUCCESS);
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    };

    const openNotification = () => {
        notification.open({
            type: 'success',
            message: 'Thành công',
            description: 'Xác nhận đặt hàng thành công',
        });
    };

    let totolPrice = 0;
    carts.forEach((item, index) => {
        totolPrice += item.amount * item.product.price
    })
    return (
        <Row>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{
                padding: '10px 5px'
            }}>
                <Card>
                    <div style={{
                        fontWeight: 500,
                        fontSize: 18,

                    }}>
                        Tiền thanh toán
                    </div>
                    <div style={{
                        color: '#11052C',
                        fontWeight: 600,
                        fontSize: 32,
                        textAlign: 'right'
                    }}>
                        {formatter.format(totolPrice)}
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{
                padding: '10px 5px'
            }}>
                <Card>
                    <Form
                        form={form}
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Form.Item
                                    name="Địa chỉ"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Địa chỉ là bắt buộc'
                                        },

                                    ]}
                                    label="Địa chỉ"
                                    tooltip="*Địa chỉ là bắt buộc"
                                >
                                    <TextArea
                                        rows={5}
                                        showCount
                                        maxLength={500}
                                        placeholder="Làng Đống, Đặng Đinh, ..."
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
                                textAlign: 'center'
                            }}>
                                <Button htmlType="submit" type="primary" shape="round" >
                                    Xác nhận đặt hàng
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}
export default CheckOut;
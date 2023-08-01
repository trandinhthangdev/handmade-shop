import React, { useState } from 'react';
import {Form, Input, Button, Radio, Upload, Modal, InputNumber, Row, Col, notification} from 'antd';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
const FormBuySecondHand = (props) => {
    const [form] = Form.useForm();
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([])
    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            setFileList([]);
            openNotification();
            onReset();
            props.onCloseDrawer();
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
            description: 'Bạn đã bán cho chúng tôi thành công',
        });
    };
    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };

    const handleChange = ({ fileList }) => setFileList(fileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Tải ảnh lên</div>
        </div>
    );
    return <div>
        <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
        >
            <Row>
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
                        <Input placeholder="Bộ SGK 12" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item
                        name="Mô tả"
                        rules={[
                            {
                                required: true,
                                message: 'Mô tả là bắt buộc'
                            },
                        ]}
                        label="Mô tả"
                        tooltip="*Mô tả là bắt buộc"
                    >
                        <TextArea showCount maxLength={100}  />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item
                        label="Hình ảnh minh họa"
                    >
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                            accept="image/*"
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal
                            visible={previewVisible}
                            title={previewTitle}
                            footer={null}
                            onCancel={handleCancel}
                        >
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
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
                        <TextArea showCount maxLength={100}  />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
                    textAlign: 'center',
                }}>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">Bán đồ cũ</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </div>
}
export default FormBuySecondHand;
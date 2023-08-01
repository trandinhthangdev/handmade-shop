import {Carousel, Col, Image, Row, Table} from 'antd';
import DemoPhoto from "./../assets/image/demo.jpg";
import {buySecondHand} from "../data/buy-second-hand";
const columns = [
    {
        title: 'Tên',
        dataIndex: 'name',
    },
    {
        title: 'Ảnh mô tả',
        dataIndex: 'image',
        render: value => (
            <Image width={120} src={value} alt=""/>
        ),
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
    }
];


const expandedRowRender = (record) => {
    console.log(record)
    return (
        <div>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                    <div style={{
                        maxWidth: 300
                    }} >
                        <Carousel autoplay>
                            {
                                record.photos.map(item => {
                                    return (
                                        <div>
                                            <Image
                                                width={300}
                                                src={item}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div style={{
                        maxWidth: 400
                    }}>
                        <div style={{
                            fontWeight: 600,
                            fontSize: 18
                        }}>
                            Mô tả
                        </div>
                        <div>
                            {record.description}
                        </div>
                    </div>
                    <div style={{
                        maxWidth: 400
                    }}>
                        <div style={{
                            fontWeight: 600,
                            fontSize: 18
                        }}>
                            Địa chỉ
                        </div>
                        <div>
                            {record.address}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const ListBuySecondHand = (props) => {
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <Table
            style={{
                maxWidth: '100%'
            }}
            columns={columns}
            dataSource={buySecondHand}
            onChange={onChange}
            pagination={{defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20']}}
            expandable={{expandedRowRender: record => expandedRowRender(record)}}
        />
    )
}

export default ListBuySecondHand;
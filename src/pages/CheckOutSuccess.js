import { Result, Button } from 'antd';
import {Link} from "react-router-dom";
import * as links from "./../constants/links";


const CheckOutSuccess = (props) => {
    return (
        <Result
            status="success"
            title="Đặt hàng thành công"
            extra={[
                <Link to={links.PRODUCT}>
                    <Button type="primary" key="console">
                        Tiếp tục mua hàng
                    </Button>
                </Link>
            ]}
        />
    );
}

export default CheckOutSuccess;
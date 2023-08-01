import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import * as links from "../constants/links";

const Page404 = (props) => {
    return (
        <Result
            status="error"
            title={
                <div style={{
                    fontWeight: 600,
                    fontSize: 80
                }}>
                    404
                </div>
            }
            extra={[
                <Link to={links.PRODUCT}>
                    <Button type="primary" key="console">
                        Mua hàng
                    </Button>
                </Link>
            ]}
        />
    )
}

export default Page404;
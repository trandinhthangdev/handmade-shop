import { Spin } from 'antd';

const LoadingAction = (props) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(255,255,255,0.95)'
        }}>
            <div className={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
            }}>
                <Spin />
            </div>
        </div>
    )
}

export default LoadingAction;
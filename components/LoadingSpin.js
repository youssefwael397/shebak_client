import { Alert, Space, Spin } from 'antd';
const LoadingSpin = () => (
    <div className="position-absolute top-50 start-50 translate-middle">
    <Space
        direction="vertical"
        style={{
            width: '100%',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>

        
        </Space>
        </div>
);
export default LoadingSpin;
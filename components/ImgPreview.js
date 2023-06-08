import { EyeOutlined } from '@ant-design/icons';
import { Button, Image } from 'antd';
import { useState } from 'react';
import styles from "../styles/Warnings.module.css";

const ImgPreview = ({ src, alt }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button type="primary" className={`position-relative mx-auto d-flex justify-content-center align-items-center rounded-circle img_button ${styles.img_button}`} onClick={() => setVisible(true)}>
                <Image
                    alt={alt}
                    width={50}
                    height={50}
                    className='rounded-circle'
                    src={src}
                    preview={{
                        visible,
                        src: src,
                        onVisibleChange: (value) => {
                            setVisible(value);
                        },
                    }}
                />
                <EyeOutlined className={`position-absolute ${styles.eye}`}/>
            </Button>
            <Image
                alt={alt}
                width={200}
                style={{
                    display: 'none',
                }}
                src={src}
                preview={{
                    visible,
                    src: src,
                    onVisibleChange: (value) => {
                        setVisible(value);
                    },
                }}
            />
        </>
    );
};
export default ImgPreview;
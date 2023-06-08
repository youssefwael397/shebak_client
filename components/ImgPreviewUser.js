import { EyeOutlined } from '@ant-design/icons';
import { Button, Image } from 'antd';
import { useState } from 'react';
import styles from "../styles/Warnings.module.css";

const ImgPreviewUser = ({ src, alt }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button type="primary" className={`position-relative rounded-4 ms-4 ${styles.img_button_user}`} onClick={() => setVisible(true)}>
                <Image
                    alt={alt}
                    width={106}
                    height={106}
                    className='rounded-4 border-0 p-0 mb-4 ms-1'
                    src={src}
                    preview={{
                        visible,
                        src: src,
                        onVisibleChange: (value) => {
                            setVisible(value);
                        },
                    }}
                />
                <EyeOutlined className={` ${styles.eye}`}/>
            </Button>
            {/* <Image
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
            /> */}
        </>
    );
};
export default ImgPreviewUser;
import { Button, Image } from 'antd';
import { useState } from 'react';

const ImgPreview = ({ src, alt }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                show image preview
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
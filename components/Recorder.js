import { useState, useRef, useEffect } from 'react';

const usePyramidWebCam = (videoRef) => {
    const [webCamStatus, setWebCamStatus] = useState('closed');
    const [recordedBlob, setRecordedBlob] = useState(null);
    const mediaRecorderRef = useRef(null);

    const openCam = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            videoRef.current.srcObject = mediaStream;
            setWebCamStatus('opened');
        } catch (error) {
            console.error('Error opening camera:', error);
        }
    };

    const closeCam = () => {
        const mediaStream = videoRef.current.srcObject;
        const tracks = mediaStream.getTracks();

        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
        setWebCamStatus('closed');
    };

    const startRecord = () => {
        const mediaStream = videoRef.current.srcObject;

        if (mediaStream && mediaRecorderRef.current === null) {
            const mediaRecorder = new MediaRecorder(mediaStream);
            const chunks = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const recordedBlob = new Blob(chunks, { type: 'video/webm' });
                setRecordedBlob(recordedBlob);
                setWebCamStatus('stopped');
            };

            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;
            setWebCamStatus('recording');
        }
    };

    const stopRecord = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current = null;
        }
    };

    useEffect(() => {
        return () => {
            // Clean up resources when the component unmounts
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.stop();
                mediaRecorderRef.current = null;
            }
        };
    }, []);

    return {
        webCamStatus,
        recordedBlob,
        openCam,
        closeCam,
        startRecord,
        stopRecord,
    };
};

export default usePyramidWebCam;

import { useState, useRef, useEffect } from 'react';

const usePyramidWebCam = (videoRef) => {
    const [webCamStatus, setWebCamStatus] = useState('closed');
    const [recordedBlob, setRecordedBlob] = useState(null);
    const mediaRecorderRef = useRef(null);
    const isBrowser = typeof window !== 'undefined';


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

    const startRecording = () => {
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

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current = null;
            setWebCamStatus('stopped');
        }
    };

    const downloadPyramidRecord = (downloadRef, filename) => {
        if (!downloadRef || !filename)
            return console.error("downloadPyramidRecord function missing parameter downloadLinkRef or filename");

        if (!recordedBlob) return;

        const downloadButton = downloadRef.current;
        let recorded_url = URL.createObjectURL(recordedBlob);
        downloadButton.href = recorded_url;
        downloadButton.download = `${filename}.${fileExtension}`;
    }


    useEffect(() => {
        if (isBrowser) {
            const beforeUnloadHandler = () => {
                stopRecording();
            };

            window.addEventListener('beforeunload', beforeUnloadHandler);

            return () => {
                window.removeEventListener('beforeunload', beforeUnloadHandler);
                stopRecording();
            };
        }
    }, [isBrowser]);

    return {
        webCamStatus,
        recordedBlob,
        openCam,
        closeCam,
        startRecording,
        stopRecording,
        downloadPyramidRecord
    };
};

export default usePyramidWebCam;

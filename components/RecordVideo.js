// import { React , useState } from "react";
// // import VideoRecorder from "react-video-recorder";
// import { Button } from 'antd';
// import styles from "../styles/RecordVideo.module.css"

// const RecordVideo=()=> {
//     const [display, setDisplay] = useState(false);
//     const [vidData, setVidData] = useState(null);
//     const [uploadButton, setUploadButton] = useState(false);
//     const [step, setStep] = useState(false);

//   return (
//     <div className="App">
//       <br/> <br/> <br/> <br/>
//       {step ? null : (
//         <VideoRecorder
//           timeLimit={10000}
//           onStartRecording={() => {
//             alert("Yo read this");
//           }}
//           onTurnOnCamera={() => {
//             console.log("otp");
//           }}
//           renderLoadingView={() => {
//             setDisplay(true);
//             setUploadButton(false);
//           }}
//           onRecordingComplete={(videoBlob) => {
//             // Do something with the video...
//             console.log("videoBlob", videoBlob);
//             setVidData(videoBlob);
//           }}
//           onStopRecording={() => {
//             setDisplay(false);
//             setUploadButton(true);
//           }}
//         />
//       )}
//       {uploadButton ? (
//         <Button
//           onClick={() => {
//             console.log(vidData);
//             setStep(true);
//           }}
//         >
//           Upload Video
//         </Button>
//       ) : null}
//     </div>
//   );
// }

// export default RecordVideo;

// // import {React,useState} from 'react';


// // const RecordVideo = () => {

// //     return (
// //         <div style={{
// //             textAlign: "center", marginTop: "10%", border: "1px solid grey", marginLeft: "30%",
// //             marginRight: "30%", padding: "5%"
// //         }}>

// //                     <VideoRecorder
// //                         onRecordingComplete={videoBlob => {
// //                             // Do something with the video...
// //                             console.log('videoBlob', videoBlob)
// //                         }}
// //                     />
// //                             </div>
// //     );
// // }

// // export default RecordVideo;
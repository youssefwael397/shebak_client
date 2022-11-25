import * as yup from "yup";

const FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const SUPPORTED_FORMATS = [
    "video/webm",
    "video/mp4",
    "video/wav",
];

export const registerSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    face_video: yup
        .mixed()
        .test("fileNotFound", "You must record your face", (files) => {
            return files.length
        })
        .test("fileSize", "File is too large", (files) => {
            if (files.length > 0) return files[0]?.size <= FILE_SIZE;
            return true;
        })
        .test("fileFormat", "file Format is invalid", (files) => {
            if (files.length > 0) return SUPPORTED_FORMATS.includes(files[0]?.type);
            return true;
        }),
});

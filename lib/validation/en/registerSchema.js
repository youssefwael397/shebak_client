import * as yup from 'yup';

const FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const SUPPORTED_FORMATS = ['video/webm', 'video/mp4', 'video/wav'];

export const registerSchemaStepOne = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
});

export const registerSchemaStepTwo = yup.object().shape({
  face_video: yup
    .mixed()
    .test('fileNotFound', 'You must record your face', (value) => {
      return value?.size > 0;
    }),
});

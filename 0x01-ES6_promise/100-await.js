import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const profile = await uploadPhoto();
    const user = await createUser();
    return {
      photo: profile,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;

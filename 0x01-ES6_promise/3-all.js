import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  Promise.all([photo, user])
    .then((result) => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

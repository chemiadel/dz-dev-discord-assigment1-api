const dummyData = {
  email: "johndoe66@gmail.com",
  password: "somePassword",
};

type IUser = typeof dummyData;

export default function userValidition(userData: IUser): boolean {
  if (
    dummyData.email === userData.email &&
    dummyData.password === userData.password
  )
    return true;

  return false;
}

let user = {
  name: "ronaldo",
  password: "ronaldo@123",
  email: "ronaldo@gmail.com",
  age: 38,
  gender: "male",
};
const password = "gcsyfctc92872972126579287$%&#^$^&~^%@~";

let newuser = { ...user, password }; //spread  operator

console.log(newuser);

console.log(
  "$2b$05$mtImq28R.qPIT1uL6KJVve9uONxeGpihUbmhByswBwzDfWuz9OMrW" ===
    "hrithik@123"
);

const Users = {
  firstName: "Muskan",
  gender: "Female",
};
console.log(Users["gender"]);
const allUsers = [
  {
    firstName: "Muskan",
    gender: "female",
  },
  { firstName: "Ritu", gender: "female" },
  {
    firstName: "Lakshay",
    gender: "male",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] === "male") {
    console.log(allUsers[i]["firstName"]);
  }
}

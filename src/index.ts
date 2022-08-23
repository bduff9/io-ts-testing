import { validateString, validateUser } from "./io";

console.log(validateString("a string"));
console.log(validateString(null));

try {
  const user = validateUser({ name: "Brian" });
  console.log("Valid value sent", user);
} catch (error) {
  // console.error(error);
}

try {
  const user = validateUser({ userId: 1 });
  console.log("Valid value sent", user);
} catch (error) {
  // console.error(error);
}

try {
  const user = validateUser(null);
  console.log("Valid value sent", user);
} catch (error) {
  // console.error(error);
}

try {
  const user = validateUser({ userId: 1, name: "Brian" });
  console.log("Valid value sent", user);
} catch (error) {
  // console.error(error);
}

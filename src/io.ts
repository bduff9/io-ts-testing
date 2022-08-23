import * as t from "io-ts";
import { PathReporter } from "io-ts/PathReporter";
import { pipe } from "fp-ts/function";
import { fold, isRight } from "fp-ts/Either";

const onLeft = (errors: t.Errors): string => {
  return `${errors.length} error(s) found`;
};

const onRight = (s: string) => s;

export const validateString = (value: unknown): string =>
  pipe(t.string.decode(value), fold(onLeft, onRight));

const UserSchema = t.type({
  userId: t.number,
  name: t.string,
});
type User = t.TypeOf<typeof UserSchema>;

export const validateUser = (value: unknown): User => {
  const result = UserSchema.decode(value);

  if (isRight(result)) {
    return result.right;
  }

  console.error(PathReporter.report(result));

  throw new Error("Error thrown on bad User value");
};

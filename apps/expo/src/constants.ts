export const CLERK_PUBLISHABLE_KEY =
  "pk_test_bGVhZGluZy1zdGluZ3JheS0yOC5jbGVyay5hY2NvdW50cy5kZXYk";

if (CLERK_PUBLISHABLE_KEY === undefined) {
  throw new Error("CLERK_PUBLISHABLE_KEY is not defined");
}

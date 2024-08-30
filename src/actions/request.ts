"use server";
import { createServerAction } from "zsa";

export const serverRequest = createServerAction().handler(async ({ input }) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  console.log(`json`, json)
  return json;
});

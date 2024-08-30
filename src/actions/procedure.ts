"use server";
import { createServerActionProcedure } from "zsa";

export const unauthedProcedure = createServerActionProcedure()
  .experimental_shapeError(({ err }) => {
    return err;
  })
  .handler(async () => {
    return {};
  });

import { createLogger } from "redux-logger";
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const loggerMiddleware = createLogger();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== "production") {
      return getDefaultMiddleware().concat(loggerMiddleware);
    }
    return getDefaultMiddleware();
  },
});

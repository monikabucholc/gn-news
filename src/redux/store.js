import { configureStore  } from "@reduxjs/toolkit";
import viewModeSliceReducer from "./viewModeSlice";
import articleNumberSliceReducer from "./articleNumberSlice";

export const store = configureStore({
    reducer: {
        viewMode: viewModeSliceReducer,
        articleNumber: articleNumberSliceReducer
    }
});


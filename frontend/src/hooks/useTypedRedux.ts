import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatchTyped = () => useDispatch<AppDispatch>();
export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;

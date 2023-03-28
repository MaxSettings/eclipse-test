import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppState } from "src/redux/AppState";
import { AppDispatch } from "src/redux/AppDispatch";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../features/store";

export const useAppSelector2 = useSelector<TypedUseSelectorHook<RootState>>
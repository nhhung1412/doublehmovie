import { useDispatch } from "react-redux";
import { AppDispatch } from "../features/store";

export const useAppDispatch: () => AppDispatch = useDispatch
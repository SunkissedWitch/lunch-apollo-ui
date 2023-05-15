import { redirect } from "react-router-dom";
import { LOCAL_STORAGE_TOKEN_NAME } from "../config";

export const authLoader = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)

  return token ? redirect('/users') : null;
}
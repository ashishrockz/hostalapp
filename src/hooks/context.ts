import { createContext } from "react";
import { User } from "../types/Types";

export const UserContext = createContext<User | null>(null);
// // context/AuthContext.tsx
// "use client";

// import React, {
//     createContext,
//     useContext,
//     useEffect,
//     useState,
//     ReactNode,
// } from "react";

// // 1. Define the shape of the auth context
// interface AuthContextType {
//     isLoggedIn: boolean;
//     login: (token: string) => void;
//     logout: () => void;
// }

// // 2. Create context with default undefined
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // 3. AuthProvider props
// interface AuthProviderProps {
//     children: ReactNode;
// }

// // 4. AuthProvider component
// export const AuthProvider = ({ children }: AuthProviderProps) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem("jwtToken");
//         setIsLoggedIn(!!token);
//     }, []);

//     const login = (token: string) => {
//         localStorage.setItem("jwtToken", token);
//         setIsLoggedIn(true);
//     };

//     const logout = () => {
//         localStorage.removeItem("jwtToken");
//         localStorage.removeItem("user");
//         setIsLoggedIn(false);
//     };

//     return (
//         <AuthContext.Provider value= {{ isLoggedIn, login, logout }
// }>
//     { children }
//     </AuthContext.Provider>
//   );
// };

// // 5. Hook to use AuthContext safely
// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
// };

export interface User {
    userInfo: {
      name?: string;
      email?: string;
    };
    setUserInfo: (userInfo: User["userInfo"]) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
  }
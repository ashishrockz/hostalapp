  export interface User {
    userInfo: {
      name?: string;
      email?: string;
      number?:string;
    };
    setUserInfo: (userInfo: User["userInfo"]) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    recentBookings:any;
    setRecentBookings:(obj:any) => void;
  }
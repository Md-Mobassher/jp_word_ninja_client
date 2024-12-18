/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constant/authkey";
import { JwtPayload } from "jwt-decode";
import { verifyToken } from "@/utils/verifyToken";

const useUserInfo = (): any | string => {
  const [userInfo, setUserInfo] = useState<any | string>("");
  console.log(userInfo);
  useEffect(() => {
    const fetchUserInfo = () => {
      const authToken = getFromLocalStorage(authKey);
      console.log(authToken);
      if (authToken) {
        const decodedData: JwtPayload & { role: any } = verifyToken(
          authToken
        ) as JwtPayload & {
          role: any;
        };
        const userInfo: any = {
          ...decodedData,
          role: decodedData.role?.toLowerCase() || "",
        };
        setUserInfo(userInfo);
      } else {
        setUserInfo("");
      }
    };

    fetchUserInfo();
  }, []);

  return userInfo;
};

export default useUserInfo;

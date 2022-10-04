import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isManager = false;
  let isAdmin = false;
  let status = "Employee";

  if (token) {
    const decoded = jwtDecode(token);
    const { username, roles } = decoded.UserInfo;

    isManager = roles.includes("Manager");
    isAdmin = roles.includes("isAdmin");

    if (isManager) {
      status = "Manager";
    }

    if (isAdmin) {
      status = "Manager";
    }

    return { username, roles, isManager, isAdmin, status };
  }

  return { username: "", isManager, isAdmin, status, roles: [] };
};

export default useAuth;

import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "contexts";

const RedirectPage = () => {
  const {
    auth: { isAuth },
  } = useAuth();
  const location = useLocation();
  
  return isAuth ? (
    <Navigate to="/history" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RedirectPage;
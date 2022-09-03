import { useSelector } from "react-redux";
import { RootsState } from "../../store";
import { AuthState } from "../../store/slices/auth.slice";

const useUser = () => {
  return useSelector<RootsState, AuthState>((s) => s.auth);
};

export default useUser;

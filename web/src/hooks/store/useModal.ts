import { useSelector } from "react-redux";
import { RootsState } from "../../store";
import { ModalState } from "../../store/slices/modal.slice";

const useModal = () => {
  return useSelector<RootsState, ModalState>((s) => s.modal);
};

export default useModal;

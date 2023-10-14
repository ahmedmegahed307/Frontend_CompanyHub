import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import User from "../../../models/User";

const useUserMutation = (onUpdateOrDelete: () => void, isUpdate: boolean) => {
  const queryClient = useQueryClient();
};

export default useUserMutation;

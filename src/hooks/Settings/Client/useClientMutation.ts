import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const useClientMutation = (onUpdateOrDelete: () => void, isUpdate: boolean) => {
  const queryClient = useQueryClient();
};

export default useClientMutation;

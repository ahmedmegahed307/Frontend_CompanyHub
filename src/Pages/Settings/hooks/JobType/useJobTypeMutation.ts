import { useQueryClient, useMutation } from "@tanstack/react-query";

import Swal from "sweetalert2";


const useJobTypeMutation = (
  onUpdateOrDelete: () => void,
  isUpdate: boolean
) => {
  const queryClient = useQueryClient();

 
};

export default useJobTypeMutation;

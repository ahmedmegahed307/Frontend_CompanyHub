import { useMutation, useQueryClient } from "@tanstack/react-query";

import Swal from "sweetalert2";


const useCreateClient = (onCreate:()=>void) =>{
    const queryClient = useQueryClient();
 
}
export default useCreateClient;
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import Swal from "sweetalert2";
import { JobTypesList } from "../../../../models";

const useCreateJobType = (onCreate:()=>void) =>{
    const queryClient = useQueryClient();
    return useMutation<JobTypesList,Error,JobTypesList>(
        (jobType: JobTypesList) =>
          DataStore.save(
            new JobTypesList({
                 name:jobType.name,
                 subTypeList:jobType.subTypeList,
                 isActive:true
       
                 })
          ),

        {
          //savedJobType -> object from databse , newJobType ->object we created
          onSuccess: (savedJobType, newJobType) => { 
            console.log(savedJobType);
            console.log(newJobType);
            queryClient.invalidateQueries({
              queryKey: ["jobTypeList"],
            });
            Swal.fire({
              title: "Congratulations",
              text: "JobType have been saved successfully",
              icon: "success",
            });
           onCreate();
          },
          onError: (error: any) => {
            console.log("error", error);
          },
        }
      );
}
export default useCreateJobType;
import {create} from 'zustand';

interface ResolutionStore {
  updateResolutionInput: string;
  updateResolutionId: string;
  deleteResolutionId: string;
  setUpdateResolutionInput: (input: string) => void;
  setUpdateResolutionId: (id: string) => void;
  setDeleteResolutionId: (id: string) => void;
}

const useResolutionStore = create<ResolutionStore>((set) => ({
  updateResolutionInput: "",
  updateResolutionId: "",
  deleteResolutionId: "",
  setUpdateResolutionInput: (input) => set({ updateResolutionInput: input }),
  setUpdateResolutionId: (id) => set({ updateResolutionId: id }),
  setDeleteResolutionId: (id) => set({ deleteResolutionId: id }),
}));

export default useResolutionStore;

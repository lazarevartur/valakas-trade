import { AppDispatch } from "../store";
import {
  MRX_PROGRAMS_FAIL,
  MRX_PROGRAMS_REQUEST,
  MRX_PROGRAMS_SUCCESS,
} from "../slice/mrxProgramsSlice";
import { ProgramsApi } from "../../services/programsApi";

export const getMrxPrograms = () => async (
  dispatch: AppDispatch,
  getState?: any
) => {
  try {
    dispatch(MRX_PROGRAMS_REQUEST());
    const data = await ProgramsApi.getAllMrxPrograms();
    setTimeout(() => {
      dispatch(MRX_PROGRAMS_SUCCESS(data));
    }, 500);
  } catch (e) {
    dispatch(MRX_PROGRAMS_FAIL(e));
  }
};

import { AppDispatch } from "../store";
import {
  MRX_PROGRAM_FAIL,
  MRX_PROGRAM_REQUEST,
  MRX_PROGRAM_SUCCESS,
  MRX_PROGRAMS_FAIL,
  MRX_PROGRAMS_REQUEST,
  MRX_PROGRAMS_SUCCESS,
} from "../slice/mrxProgramsSlice";
import { ProgramsApi } from "../../services/programsApi";

export const getMrxPrograms =
  () => async (dispatch: AppDispatch, getState?: any) => {
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
export const getAvailableMrxPrograms =
  () => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(MRX_PROGRAMS_REQUEST());
      const data = await ProgramsApi.getAvailableMrxProgram(token);
      setTimeout(() => {
        dispatch(MRX_PROGRAMS_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(MRX_PROGRAMS_FAIL(e));
    }
  };
export const getMrxProgramById =
  (id) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(MRX_PROGRAM_REQUEST());
      const data = await ProgramsApi.getMrxProgram(id, token);
      setTimeout(() => {
        dispatch(MRX_PROGRAM_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(MRX_PROGRAM_FAIL(e));
    }
  };

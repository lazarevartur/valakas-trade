import { AppDispatch } from "../store";
import { ProgramsApi } from "../../services/programsApi";
import {
  OPTIONAL_PROGRAM_FAIL,
  OPTIONAL_PROGRAM_REQUEST,
  OPTIONAL_PROGRAM_SUCCESS,
  OPTIONAL_PROGRAMS_FAIL,
  OPTIONAL_PROGRAMS_REQUEST,
  OPTIONAL_PROGRAMS_SUCCESS,
} from "../slice/optionalProgram";

export const getOptionalPrograms =
  () => async (dispatch: AppDispatch, getState?: any) => {
    try {
      dispatch(OPTIONAL_PROGRAMS_REQUEST());
      const data = await ProgramsApi.getAllOptionalPrograms();
      setTimeout(() => {
        dispatch(OPTIONAL_PROGRAMS_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(OPTIONAL_PROGRAMS_FAIL(e));
    }
  };

export const getOptionalProgram =
  () => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(OPTIONAL_PROGRAM_REQUEST());
      const data = await ProgramsApi.getOptionalProgram(token);
      setTimeout(() => {
        dispatch(OPTIONAL_PROGRAM_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(OPTIONAL_PROGRAM_FAIL(e));
    }
  };

export const getPurchasedOptions =
  () => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(OPTIONAL_PROGRAMS_REQUEST());
      const data = await ProgramsApi.getPurchasedOptions(token);
      setTimeout(() => {
        dispatch(OPTIONAL_PROGRAMS_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(OPTIONAL_PROGRAMS_FAIL(e));
    }
  };

export const getAvailableOptionalPrograms =
  () => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();

    try {
      dispatch(OPTIONAL_PROGRAM_REQUEST());
      const data = await ProgramsApi.getAvailableOptionalProgram(token);
      setTimeout(() => {
        dispatch(OPTIONAL_PROGRAM_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(OPTIONAL_PROGRAM_FAIL(e));
    }
  };

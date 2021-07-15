import { AppDispatch } from "../store";
import { ProgramsApi } from "../../services/programsApi";
import {
  PRIORITY_PROGRAM_FAIL,
  PRIORITY_PROGRAM_REQUEST,
  PRIORITY_PROGRAM_SUCCESS,
  PRIORITY_PROGRAMS_FAIL,
  PRIORITY_PROGRAMS_REQUEST,
  PRIORITY_PROGRAMS_SUCCESS,
} from "../slice/prioritySlice";

export const getPriorityPrograms = () => async (
  dispatch: AppDispatch,
  getState?: any
) => {
  try {
    dispatch(PRIORITY_PROGRAMS_REQUEST());
    const data = await ProgramsApi.getAllPriorityPrograms();
    setTimeout(() => {
      dispatch(PRIORITY_PROGRAMS_SUCCESS(data));
    }, 500);
  } catch (e) {
    dispatch(PRIORITY_PROGRAMS_FAIL(e));
  }
};

export const getPriorityProgram = (name) => async (
  dispatch: AppDispatch,
  getState?: any
) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(PRIORITY_PROGRAM_REQUEST());
    const data = await ProgramsApi.getPriorityProgramByName(token, name);
    setTimeout(() => {
      dispatch(PRIORITY_PROGRAM_SUCCESS(data));
    }, 500);
  } catch (e) {
    dispatch(PRIORITY_PROGRAM_FAIL(e));
  }
};
//
// export const getPurchasedOptions = () => async (
//     dispatch: AppDispatch,
//     getState?: any
// ) => {
//     const {
//         authentication: {
//             userData: { token },
//         },
//     } = getState();
//     try {
//         dispatch(PRIORITY_PROGRAMS_REQUEST());
//         const data = await ProgramsApi.getPurchasedOptions(token);
//         setTimeout(() => {
//             dispatch(PRIORITY_PROGRAMS_SUCCESS(data));
//         }, 500);
//     } catch (e) {
//         dispatch(PRIORITY_PROGRAMS_FAIL(e));
//     }
// };
//
// export const getAvailablePriorityPrograms = () => async (
//     dispatch: AppDispatch,
//     getState?: any
// ) => {
//     const {
//         authentication: {
//             userData: { token },
//         },
//     } = getState();
//
//     try {
//         dispatch(PRIORITY_PROGRAM_REQUEST());
//         const data = await ProgramsApi.getAvailablePriorityProgram(token);
//         console.log("УРА");
//         setTimeout(() => {
//             dispatch(PRIORITY_PROGRAM_SUCCESS(data));
//         }, 500);
//     } catch (e) {
//         dispatch(PRIORITY_PROGRAM_FAIL(e));
//     }
// };

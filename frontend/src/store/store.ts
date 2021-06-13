import { configureStore } from "@reduxjs/toolkit";

import { userAuthentication } from "./slice/authSlice";
import { userDashboard } from "./slice/userDashboardSlice";
import { userTeam } from "./slice/teamSlice";

import { logout } from "./action/authAction";

export const store = configureStore({
  reducer: {
    authentication: userAuthentication.reducer,
    dashboard: userDashboard.reducer,
    team: userTeam.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(jwtMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

// @ts-ignore
export type AppDispatch = typeof store.dispatch;
export function jwtMiddleware({ dispatch, getState }) {
  return (next: any) => (action) => {
    if (action.type === "dashboard/USER_DASHBOARD_FAIL") {
      return dispatch(logout());
    }
    return next(action);
  };
}

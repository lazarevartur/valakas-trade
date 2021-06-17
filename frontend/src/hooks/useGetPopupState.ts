import { useState, useEffect, useMemo } from "react";
import useGetParameter from "./useGetParameter";
import { GET_PARAMS, ModalType } from "../const/popup";

let timeout: any;

export default (type: ModalType) => {
  const popupName = useGetParameter(type);
  const [mountedPopup, setMountedPopup] = useState(popupName);

  useEffect(() => {
    if (popupName) {
      timeout && clearTimeout(timeout);
      setMountedPopup(popupName);
    } else {
      timeout = setTimeout(() => {
        setMountedPopup(null);
      }, 300);
    }
  }, [popupName]);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  const isOpened = useMemo(() => Boolean(popupName), [popupName]);

  return {
    mountedPopup,
    isOpened,
  };
};

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { dataFromSnapshot } from "../firestore/firestoreService";
import { loadingPlaceHolder } from "../store/action";
import { errorAction } from "../store/action";

const useFirestoreDoc = ({ query, data, deps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingPlaceHolder(true));
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        // console.log(snapshot);
        if (!snapshot.exists) {
          dispatch(errorAction(true));
          return;
        }
        data(dataFromSnapshot(snapshot));
        setTimeout(() => {
          dispatch(loadingPlaceHolder(false));
        }, 250);
      },
      (error) => console.log(error)
    );

    return () => {
      unsubscribe();
    };
  }, deps); //react-hooks/exhaustive-deps
};

export default useFirestoreDoc;

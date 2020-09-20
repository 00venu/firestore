import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { dataFromSnapshot } from "../firestore/firestoreService";
import { loadingPlaceHolder } from "../store/action";

const useFirestoreCollection = ({ query, data, deps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingPlaceHolder(true));
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => dataFromSnapshot(doc));
        data(docs);
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

export default useFirestoreCollection;

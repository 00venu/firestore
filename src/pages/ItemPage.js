import React, { Fragment } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromFirestore } from "../firestore/firestoreService";
import { fetchData } from "../store/action";
import Placeholder from "../components/Placeholder";
import Item from "../components/Item";
import useFirestoreCollection from "../hooks/useFirestoreCollection";

function ItemPage(props) {
  const data = useSelector((state) => state.data.data);
  let loading = useSelector((state) => state.data.loading);
  // console.log(data);
  const dispatch = useDispatch();
  useFirestoreCollection({
    query: () => getDataFromFirestore(),
    data: (event) => dispatch(fetchData(event)),
    deps: [dispatch],
  });

  const itemHandler = (id) => {
    props.history.push("/" + id);
  };

  let items = data.map((item, i) => (
    <Item key={i} details={item} click={() => itemHandler(item.id)} />
  ));

  let test = [];
  for (let i = 0; i < data.length; i++) {
    test.push(<Placeholder key={i} />);
  }

  return <Fragment>{loading ? test.map((item) => item) : items}</Fragment>;
}

export default ItemPage;

//console.log(data);

/*useEffect(() => {
    dispatch(loadingPlaceHolder(true));
    const unsubscribe = getDataFromFirestore({
      next: (snapshot) => {
        dispatch(
          fetchData(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
          )
        );
        setTimeout(() => {
          dispatch(loadingPlaceHolder(false));
        }, 250);
      },
      error: (error) => console.log(error),
    });
    return unsubscribe;
  }, [dispatch]);*/

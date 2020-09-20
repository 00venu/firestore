import React, { useState } from "react";
import useFirestoreDoc from "../hooks/useFirestoreDoc";
import { getDocFromFirestore } from "../firestore/firestoreService";
import { useSelector } from "react-redux";
import Placeholder from "../components/Placeholder";

const ItemDetails = (props) => {
  let loading = useSelector((state) => state.data.loading);
  const [doc, setDoc] = useState();
  const itemId = props.match.params.id;
  useFirestoreDoc({
    query: () => getDocFromFirestore(itemId),
    data: (event) => setDoc(event),
    deps: [itemId],
  });

  let content;
  if (doc) {
    const { title, desc, price } = doc;
    const formattedToday = doc.date.toLocaleDateString();
    content = (
      <div className="App">
        <span>{formattedToday}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <strong>{price}</strong>
      </div>
    );
  }

  return <div>{loading ? <Placeholder /> : content}</div>;
};

export default ItemDetails;

// const data = useSelector((state) => state.data.data);
// const element = data.find((item) => item.id === itemId);

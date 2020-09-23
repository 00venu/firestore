import React, { useState, Fragment } from "react";
import useFirestoreDoc from "../hooks/useFirestoreDoc";
import {
  getDocFromFirestore,
  deleteDocFromFirestore,
} from "../firestore/firestoreService";
import { useSelector } from "react-redux";
import Placeholder from "../components/Placeholder";
import { Redirect } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const ItemDetails = (props) => {
  let loading = useSelector((state) => state.data.loading);
  let error = useSelector((state) => state.data.error);
  const [doc, setDoc] = useState();
  const itemId = props.match.params.id;
  useFirestoreDoc({
    query: () => getDocFromFirestore(itemId),
    data: (event) => setDoc(event),
    deps: [itemId],
  });
  const editDocHandler = () => {
    props.history.push("/itemForm/" + doc.id);
  };
  const deleteHandler = () => {
    deleteDocFromFirestore(doc.id);
    props.history.push("/");
  };
  let content;
  if (doc) {
    const { title, desc, price } = doc;
    const formattedToday = doc.date.toLocaleDateString();
    content = (
      <Fragment>
        <div className="App">
          <span>{formattedToday}</span>
          <h3>{title}</h3>
          <p>{desc}</p>
          <strong>{price}</strong>
        </div>
        <div style={{ marginRight: "10px", textAlign: "right" }}>
          <Button animated="vertical" onClick={editDocHandler}>
            <Button.Content hidden>Edit</Button.Content>
            <Button.Content visible>
              <Icon name="pencil" />
            </Button.Content>
          </Button>
          <Button animated="vertical" onClick={deleteHandler}>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
          </Button>
        </div>
      </Fragment>
    );
  }
  if (error) return <Redirect to="/error" />;

  return <div>{loading ? <Placeholder /> : content}</div>;
};

export default ItemDetails;

// const data = useSelector((state) => state.data.data);
// const element = data.find((item) => item.id === itemId);

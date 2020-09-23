import React, { useState, Fragment, useEffect } from "react";
import useFirestoreDoc from "../hooks/useFirestoreDoc";
import { Button, Form } from "semantic-ui-react";
import {
  addDocToFirestore,
  updateDocToFirestore,
} from "../firestore/firestoreService";
import { withRouter } from "react-router-dom";
import { getDocFromFirestore } from "../firestore/firestoreService";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { errorAction } from "../store/action";

const initialValues = {
  date: "",
  title: "",
  desc: "",
  price: "",
};
const ItemForm = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const error = useSelector((state) => state.data.error);

  const itemId = props.match.params.id ? props.match.params.id : "undefined";

  useFirestoreDoc({
    query: () => getDocFromFirestore(itemId),
    data: (event) => {
      setValues({
        ...event,
        date: new Date(event.date).toISOString().split("T")[0],
        title: event.title,
        desc: event.desc,
        price: event.price,
      });
    },
    deps: [itemId],
  });

  const onsubmitHandler = async () => {
    if (props.match.params.id) {
      await updateDocToFirestore(values);
    } else {
      await addDocToFirestore(values);
    }

    toast.success("Post has been created successfully!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      props.history.push("/");
    }, 2100);
  };
  dispatch(errorAction(false));
  return (
    <Fragment>
      <Form onSubmit={onsubmitHandler}>
        <Form.Field>
          <label>Date</label>
          <input
            placeholder=""
            name="date"
            type="date"
            defaultValue={values.date}
            onChange={(e) =>
              setValues({
                ...values,
                [e.target.name]: new Date(e.target.value),
              })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Header</label>
          <input
            placeholder="Header"
            name="title"
            defaultValue={values.title}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder="Description"
            name="desc"
            defaultValue={values.desc}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input
            placeholder="Price"
            name="price"
            defaultValue={values.price}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
      <ToastContainer />
    </Fragment>
  );
};

export default withRouter(ItemForm);

import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const homeHandler = () => {
    props.history.push("/");
  };

  const createPostHandler = () => {
    props.history.push("/itemForm");
  };
  return (
    <Menu>
      <Menu.Item onClick={homeHandler}>Home</Menu.Item>
      <Menu.Item>
        <Button primary onClick={createPostHandler}>
          Create Post
        </Button>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary>Login</Button>
          <Button secondary style={{ marginLeft: "10px" }}>
            Register
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(Header);

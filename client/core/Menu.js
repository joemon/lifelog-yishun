import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import HomeIcon from "material-ui-icons/Home";
import Button from "material-ui/Button";
import auth from "./../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";
import Mainicon from "material-ui-icons/BubbleChart";

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "#ff4081" };
  else return { color: "#ffffff" };
};
const Menu = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">
        Lifelog management system
      </Typography>
      <Mainicon />

      {!auth.isAuthenticated() && (
        <span>
          <Link to="/">
            <IconButton aria-label="Home" style={isActive(history, "/")}>
              <HomeIcon />
            </IconButton>
          </Link>
          <Link to="/users">
            <Button style={isActive(history, "/users")}>Users</Button>
          </Link>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign up</Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Sign In</Button>
          </Link>
        </span>
      )}
      {auth.isAuthenticated() && (
        <span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button
              style={isActive(
                history,
                "/user/" + auth.isAuthenticated().user._id
              )}
            >
              My Profile
            </Button>
          </Link>

          <Link to={"/createmedia/" + auth.isAuthenticated().user._id}>
            <Button
              style={isActive(
                history,
                "/createmedia/" + auth.isAuthenticated().user._id
              )}
            >
              Upload
            </Button>
          </Link>

          <Link to={"/medialist/" + auth.isAuthenticated().user._id}>
            <Button
              style={isActive(
                history,
                "/medialist/" + auth.isAuthenticated().user._id
              )}
            >
              IMG
            </Button>
          </Link>

          <Link to={"/gps/" + auth.isAuthenticated().user._id}>
            <Button
              style={isActive(
                history,
                "/gps/" + auth.isAuthenticated().user._id
              )}
            >
              GPS
            </Button>
          </Link>

          <Button
            color="inherit"
            onClick={() => {
              auth.signout(() => history.push("/"));
            }}
          >
            Sign out
          </Button>
        </span>
      )}
    </Toolbar>
  </AppBar>
));

export default Menu;

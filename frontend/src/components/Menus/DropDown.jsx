import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MoreVertIcon from "@material-ui/icons/MoreVert";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: "var(--primary-red)",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      }
    }
  }
}))(MenuItem);

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      anchor: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  // DROPDOWN MENU
  handleClick = (event) => {
    this.setState({
      anchor: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchor: null
    });
  };

  render() {
    return (
      <React.Fragment>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{
            outline: "none"
          }}
        >
          <MoreVertIcon style={{
            color: "white",
          }} />
        </IconButton>
        <StyledMenu
          anchorEl={this.state.anchor}
          open={Boolean(this.state.anchor)}
          onClose={this.handleClose}>
          <StyledMenuItem
            onClick={this.handleClose}>
            <a href="/auth/google" className="nav-link" style={{
              color: "black"
            }}>
              Google
            </a>
          </StyledMenuItem>
        </StyledMenu>
      </React.Fragment>
    );
  };
};
export default DropDown;

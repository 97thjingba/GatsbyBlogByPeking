import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Burger from "@material-ui/icons/FormatAlignJustify";
import { Container } from "reactbulma";

// const useStyles = makeStyles({
//     list: {
//         width: 250,
//     },
//     fullList: {
//         width: 'auto',
//     },
// });

// const classes = useStyles();

class DrawerLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false
        };
    }

    _toggleDrawer = () => {
        this.setState({ left: true });
    };

    _toClose = () => {
        this.setState({ left: false });
    };

    _sideList = () => {
        return (
            <div
            // className={classes.list}
            >
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    };

    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Button
                            onClick={() => {
                                this._toggleDrawer();
                            }}
                        >
                            <Burger />
                        </Button>
                        <Drawer
                            open={this.state.left}
                            onClose={() => {
                                this._toClose();
                            }}
                        >
                            {this._sideList()}
                        </Drawer>
                    </div>
                </nav>
            </div>
        );
    }
}

export default DrawerLeft;

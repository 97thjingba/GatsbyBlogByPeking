import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Burger from "@material-ui/icons/FormatAlignJustify";
import styled from "styled-components";
import DrawerListData from "../model/DrawerListData"
import DrawerListModel from "../model/DrawerListModel"
import { FaGithub } from 'react-icons/fa';

const BoxWidth = styled.section`
  width: 200px;
`;

class DrawerLeft extends Component {
    constructor(props) {
        super(props);
        this.drawerListModel = new DrawerListModel();
        this.drawerListModel.createDrawerList(DrawerListData); 
        this.state = {
            left: false,
            list:this.drawerListModel.listItems()
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
            <BoxWidth>
                <List>
                    {this.state.list.map((item,index) => (
                        <a href={item.title_link}>
                            <ListItem button key={item.title}>
                                <ListItemIcon>
                                   
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </a>
                    ))}
                </List>
                <Divider />
            </BoxWidth>
        );
    };

    render() {
        return (
            <div>
                <nav role="navigation" aria-label="main navigation">
                    <div className="navbar-brand ">
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

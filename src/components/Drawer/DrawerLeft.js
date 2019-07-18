import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Burger from "@material-ui/icons/FormatAlignJustify";
import styled from "styled-components";
import DrawerListData from "../model/DrawerListData";
import DrawerListModel from "../model/DrawerListModel";

const BoxWidth = styled.section`
  width: 200px;
`;

const Item = styled.a`
  color: black;
`;

const BurgerStyle = styled.section`
  color: white;
`;

class DrawerLeft extends Component {
    constructor(props) {
        super(props);
        this.drawerListModel = new DrawerListModel();
        this.drawerListModel.createDrawerList(DrawerListData);
        this.state = {
            left: false,
            list: this.drawerListModel.listItems()
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
                    {this.state.list.map(item => (
                        <Item href={item.title_link}>
                            <ListItem button key={item.title}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Item>
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
                    <div className="navbar-brand">
                        <Button
                            onClick={() => {
                                this._toggleDrawer();
                            }}
                        >
                            <BurgerStyle>
                                <Burger />
                            </BurgerStyle>
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

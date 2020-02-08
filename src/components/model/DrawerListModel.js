export default class DrawerListModel {
    constructor(props) {
        if (props) {
            this.title = props.title;
            this.titleLink = props.titleLink;
            this.icon = props.icon;
        }
    }

    createDrawerList(drawerListDatas) {
        this.list = drawerListDatas.map((drawerListData) => {
            const { title, titleLink, icon } = drawerListData;
            const params = {
                title,
                titleLink,
                icon,
            };
            return new DrawerListModel(params);
        });
    }

    listItems() {
        return this.list;
    }
}

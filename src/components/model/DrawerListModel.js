export default class DrawerListModel {
    constructor(props) {
        if (props) {
            this.title = props.title;
            this.title_link = props.title_link;
            this.icon = props.icon;
        }
    }

    createDrawerList(drawerListDatas) {
        this.list = drawerListDatas.map((drawerListData) => {
            // eslint-disable-next-line camelcase
            const { title, title_link, icon } = drawerListData;
            const params = {
                title,
                title_link,
                icon,
            };
            return new DrawerListModel(params);
        });
    }

    listItems() {
        return this.list;
    }
}

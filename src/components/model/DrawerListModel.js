export default class DrawerListModel {
    constructor(props) {
        if (props) {
            this.title = props["title"]
            this.title_link = props["title_link"]
        }
    }

    createDrawerList(drawerListDatas) {
        this.list = drawerListDatas.map((drawerListData) => {
            const { title, title_link } = drawerListData;
            const params = {
                title,
                title_link,
            };
            return new DrawerListModel(params);
        });
    }

    listItems() {
        return this.list;
    }
}
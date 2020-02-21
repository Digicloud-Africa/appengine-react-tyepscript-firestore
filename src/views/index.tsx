import * as React from "react";
import Crud from "./crud";
import Item, {IItem} from "./item";
import Layout from "./layouts";

export default class Main extends React.Component<IItem> {

    public state: IItem;

    constructor(props: IItem) {
        super(props);
        this.state = props;
    }

    public componentDidMount() {
        console.log("loading scripts");
    }

    public render() {

            return (
            <Layout title={"SSR PWA"} content={this.getCrud()}/>
        );
    }

    public getItem() {
        return (
            <Item description={this.state.description}
                  category={this.state.category}
                  price={this.state.price}
                  loggedIn={this.state.loggedIn}>
            </Item>
        );
    }

    private getCrud() {
        return (
            <Crud view="level" child={this.getItem()} deletable={true} editable={true} new={true}
                     onAdd={this.componentDidMount}>
            </Crud>
        );
    }
}

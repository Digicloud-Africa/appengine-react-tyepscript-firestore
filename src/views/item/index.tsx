import * as React from "react";
import GoogleOAuth from "../../routes/auth/util";

export interface IItem {
    description: string;
    price: number;
    category: string;
    loggedIn: boolean;
}

export default class Item extends React.Component<IItem> {

    public state: IItem;

    constructor(props: IItem) {
        super(props);
        this.state = props;
        console.log(props);
    }

    public render() {
        if (!this.state.loggedIn) {
            const auth = new GoogleOAuth();
            const url = auth.urlGoogle();
            return (
                <div>
                    <a href={url}>Login with Google</a>
                </div>
            );
        } else {
            return (
                <div>
                    <label>Item Description</label>
                    <input type="text" placeholder="input new item" defaultValue={this.state.description}/>
                    <label>Item Category</label>
                    <input type="text" placeholder="input new item" defaultValue={this.state.category}/>
                    <label>Item Price (ZAR)</label>
                    <input type="number" placeholder="input new item" defaultValue={this.state.price}/>
                </div>
            );
        }
    }

    public add() {
        // this.state.
    }
}

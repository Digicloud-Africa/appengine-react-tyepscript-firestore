import * as React from "react";

export interface IItem {
    description: string;
    price: number;
    category: string;
}

export default class Item extends React.Component<IItem> {

    public state: IItem;

    constructor(props: IItem) {
        super();
        this.state = props;
    }

    public render() {
        return (
                <div>
                    <label>Item Description</label>
                    <input type="text" placeholder="input new item" defaultValue={this.state.description} />
                    <label>Item Category</label>
                    <input type="text" placeholder="input new item" defaultValue={this.state.category} />
                    <label>Item Price (ZAR)</label>
                    <input type="number" placeholder="input new item" defaultValue={this.state.price} />
                </div>
        );
    }
}

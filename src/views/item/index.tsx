import * as React from 'react';

export interface item {
    description: string;
    price: number;
    category: string;
}

export default class Item extends React.Component<item>{

    state: item;

    constructor(){
        super();
        this.state = {description:'', category:'', price: 0};
    }


    render () {
        return (
                <div>
                    <label>Item Description</label>
                    <input type="text" placeholder="input new item" value={this.state.description} />
                    <label>Item Category</label>
                    <input type="text" placeholder="input new item" value={this.state.category} />
                    <label>Item Price (ZAR)</label>
                    <input type="number" placeholder="input new item" value={this.state.price} />
                </div>
        );
    }
}
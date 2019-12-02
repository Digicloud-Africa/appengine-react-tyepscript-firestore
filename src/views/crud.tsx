import * as React from 'react';

export default class Crud extends React.Component<T>{

    state: T;
    addable: boolean = false;
    editable: boolean = false;
    deletable: boolean = false;

    constructor(){
        super();
    }


    render () {
        return (
            <form>
                <div>
                    <label>Item Description</label>
                    <input type="text" placeholder="input new item" value={this.state.description} />
                    <label>Item Category</label>
                    <input type="text" placeholder="input new item" value={this.state.category} />
                    <label>Item Price (ZAR)</label>
                    <input type="number" placeholder="input new item" value={this.state.price} />
                    <button>add</button>
                </div>
            </form>
        );
    }
}
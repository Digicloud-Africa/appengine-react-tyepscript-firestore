import * as React from 'react';
import Item, {item} from "./item";

export default class Main extends React.Component<item>{

    state: item;

    constructor(){
        super();
        this.state = {description:'', category:'', price: 0};
    }


    render () {
        return (
            <div>
                <form>
                    <Item description={this.state.description} category={this.state.category} price={this.state.price}></Item>
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }
}
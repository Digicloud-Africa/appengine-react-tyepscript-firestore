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
                <form>
                    <Item ></Item>
                </form>
            </div>
        );
    }
}
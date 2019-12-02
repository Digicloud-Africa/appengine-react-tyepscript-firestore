import * as React from 'react';

interface crud{
    new: boolean;
    editable: boolean;
    deletable: boolean;
    child: any;
}
export default class Crud extends React.Component<crud>{

    state: crud;


    constructor(){
        super();
    }


    render () {
        return (
            <form>
                <div>
                    {this.state.child}
                    {this.isNew()}
                    <button>add</button>
                </div>
            </form>
        );
    }

    private isNew() {

    }
}
import * as React from "react";

interface ICrud {
    new: boolean;
    editable: boolean;
    deletable: boolean;
    view: string;
    onAdd: any ;
    child: JSX.Element;
}

export default class Crud extends React.Component<ICrud> {

    public state: ICrud;

    constructor(props: ICrud) {
        super(props);
        this.state = props;
        console.log(props);
    }

    public render() {
        return (
            <form>
                <div className={this.state.view}>
                    {this.state.child}
                    {this.addNewButton()}
                </div>
            </form>
        );
    }

    private addNewButton() {
        if (this.state.new) {
            return (<button onClick={this.state.onAdd}>Add</button>);
        }
    }
}

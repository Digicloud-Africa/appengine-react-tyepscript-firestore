import * as React from "react";

interface IProps {
    content?: string;
    assets?: any;
    publicPath?: string;
    title?: string;
}

export default class Layout extends React.Component<IProps, {}> {

    public props: IProps;

    constructor(props: IProps) {
        super(props);
        this.props = props;
    }

    public render() {

        return (
            <html lang="en">
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"/>
                </head>
                <body>
                    <section className="section">
                        <div className="container">
                            {this.props.content}
                        </div>
                    </section>
                </body>
            </html>
        );
    }

}

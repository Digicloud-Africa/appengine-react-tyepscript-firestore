import * as React from "react";

interface IProps {
    content?: JSX.Element;
    assets?: any;
    publicPath?: string;
    title?: string;
}

export default class Layout extends React.Component<IProps> {

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
                    <div className="level">
                        <section className="section" background-color="light-green">
                            <aside className="menu">

                                <figure className="image">
                                    <img src="/images/groza_menu_image.png"/>
                                </figure>
                                <p className="menu-label">
                                    Shopping List
                                </p>
                                <ul className="menu-list">
                                    <li><a>Create New</a></li>
                                    <li><a>View All</a></li>
                                    <li><a>Export</a></li>
                                </ul>
                                <p className="menu-label">
                                    Shopping History
                                </p>
                                <ul className="menu-list">
                                    <li><a>Capture Shopping Transaction</a></li>
                                    <li><a>View Shopping History</a></li>
                                    <li><a>Send us Feedback</a></li>
                                </ul>
                                <p className="menu-label">
                                    Manage
                                </p>
                                <ul className="menu-list">
                                    <li><a>New Item Type</a></li>
                                </ul>
                            </aside>
                        </section>
                        <section className="section">
                            <div className="container">
                                {this.props.content}
                            </div>
                        </section>
                    </div>
                    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                </body>
            </html>
        );
    }

}

import React from "react";
import ReactDom from "react-dom";
import Loadable from "react-loadable";

const LoadableTable = Loadable({
    loader: () => import(/* webpackChunkName: "table" */ "./components/table/index"),
    loading: () => <p>loading...</p>
});

const LoadableAbout = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ "./components/about/index"),
    loading: () => <p>loading...</p>
});

class App extends React.Component<{}, { visible: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            visible: true
        };
    }
    toggle = () => {
        this.setState({
            visible: !this.state.visible
        });
    };
    render() {
        return (
            <React.Fragment>
                <button onClick={this.toggle}>Toggle</button>
                {this.state.visible && <LoadableTable />}
                {!this.state.visible && <LoadableAbout />}
            </React.Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById("main"));

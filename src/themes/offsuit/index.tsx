import * as React from "react";
import header from "./partials/header";
import { renderOptions } from "../../modules/render";
import footer from "./partials/footer";
import { Switch, Route } from "react-router";

export default class Index extends React.Component {
    state: any;
    props: any;

    constructor(props) {
        super(props);
    }

    render() {
        return ([
            <span className="" dangerouslySetInnerHTML={{
                __html: header({
                    title: "Offsuit Tournament Info"
                } as renderOptions)
            }} />,
            <RouteContainer {...this.props} />,
            <span dangerouslySetInnerHTML={{
                __html: footer(null)
            }} />
        ]);
    }
}

export class RouteContainer extends React.Component {
    state: any;
    props: any;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={(props) => <Home {...this.props} />} />
                <Route exact path="/foobar" component={(props) => <Foobar {...this.props} />} />
            </Switch>
        );
    }
}

class Home extends React.Component {
    state: {
        portfolios: string[]
    };
    props: any;

    constructor(props) {
        super(props);
        // console.log("home", props);

        this.state = {
            portfolios: props.portfolios || []
        };
    }

    render() {
        return ([
            <nav>
                <div className="page-wrap">
                </div>
            </nav>,
            <section className="header">
                <div className="page-wrap">
                    <header>
                        <h1>
                            Welcome To This Website
                        </h1>
                    </header>
                </div>
            </section>,
            <section>
                <div className="section-separator">
                    <div className="triangle"></div>
                </div>
                <div className="page-wrap">
                    <p>
                        <span className="bold">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Curabitur ac massa et purus faucibus pulvinar vitae consequat nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras varius leo nulla, ac condimentum turpis pellentesque tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                </div>
            </section>,
            <section>
                <div className="section-separator">
                    <div className="triangle"></div>
                </div>
                <div className="page-wrap">
                    <div className="title">
                        Projects
                    </div>
                    <div className="separator"></div>
                    <div className="image-cta">
                        {
                            this.state.portfolios.map((project: string, ind) => {
                                return (
                                    <div key={`${project}-${ind}`} className="img">
                                        project
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>,
            <section className="footer">
                <div className="section-separator">
                    <div className="triangle"></div>
                </div>
                <div className="page-wrap">
                    <footer>
                        &copy; Copyright  Darryl Dixon, 2018. All Rights Reserved.
                    </footer>
                </div>
            </section>
        ]);
    }
}

class Foobar extends React.Component {
    state: {
        portfolios: string[]
    };
    props: any;

    constructor(props) {
        super(props);
        // console.log("home", props);

        this.state = {
            portfolios: props.portfolios || []
        };
    }

    render() {
        return ([
            <nav>
                <div className="page-wrap">
                </div>
            </nav>,
            <section className="header">
                <div className="page-wrap">
                    <header>
                        <h1>
                            Alternate Web Page
                        </h1>
                    </header>
                </div>
            </section>,
            <section>
                <div className="section-separator">
                    <div className="triangle"></div>
                </div>
                <div className="page-wrap">
                    <p>
                        <span className="bold">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Curabitur ac massa et purus faucibus pulvinar vitae consequat nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras varius leo nulla, ac condimentum turpis pellentesque tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                </div>
            </section>,
            <section>
                <div className="section-separator">
                    <div className="triangle"></div>
                </div>
                <div className="page-wrap">
                    <div className="title">
                        Projects
                    </div>
                    <div className="separator"></div>
                    <div className="image-cta">
                        {
                            this.state.portfolios.map((project: string, ind) => {
                                return (
                                    <div key={`${project}-${ind}`} className="img">
                                        project
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>,
            <section className="footer">
                <div className="section-separator">
                    <div className="triangle"></div>
                </div>
                <div className="page-wrap">
                    <footer>
                        &copy; Copyright  Darryl Dixon, 2018. All Rights Reserved.
                    </footer>
                </div>
            </section>
        ]);
    }
}
import * as React from "react";
import header from "./partials/header";
import { renderOptions } from "../../modules/render";
import footer from "./partials/footer";
import { Switch, Route } from "react-router";
import { render } from "react-dom";

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
            <RoutesContainer {...this.props} />,
            <span dangerouslySetInnerHTML={{
                __html: footer(null)
            }} />
        ]);
    }
}

export class RoutesContainer extends React.Component {
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

class Nav extends React.Component {
    state: {};
    props: {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <header className="page-wrap">
                </header>
            </nav>
        );
    }
}

class Home extends React.Component {
    state: {
        eventType: EventFilterType
        tournaments: TournamentInfo
    };
    props: any;

    constructor(props) {
        super(props);
        // console.log("home", props);

        this.state = {
            eventType: EventFilterType.CURRENT,
            tournaments: []
        };
    }

    render() {
        return ([
            <Nav />,
            <section className="toggle-bar">
                <div className="page-wrap">
                    <div className="toggle-tab future">Future Events</div>
                    <div className="toggle-tab current">Current Events</div>
                    <div className="toggle-tab past">Past Events</div>
                </div>
            </section>,
            <section>

            </section>,
            <section className="footer">
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
            <Nav />,
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

// non-react definitions
enum EventFilterType {
    FUTURE = 1 << 1,
    CURRENT = 1 << 2,
    PAST = 1 << 3,
}

class TournamentInfo {}

// add this function if you want
export function domRender() {
    return render(<Index />, document.querySelector(".react-app"));
}
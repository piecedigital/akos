import * as React from "react";
import { Project } from "../../plugins/custom/portfolio/portfolio.class";
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
            <div className="" dangerouslySetInnerHTML={{
                __html: header({
                    title: "Home"
                } as renderOptions)
            }} />,
            <Switch>
                <Route exact path="/" component={(props) => <Home {...this.props} />} />
                <Route exact path="/foobar" component={(props) => <Foobar {...this.props} />} />
            </Switch>,
            <span dangerouslySetInnerHTML={{
                __html: footer(null)
            }} />
        ]);
    }
}

class Home extends React.Component {
    state: {
        portfolios: Project[]
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
                            this.state.portfolios.map((project: Project, ind) => {
                                return (
                                    <div key={`${project.name}-${ind}`} className="img">
                                        <a href={project.projectURL}>
                                            <img src={project.imageURL} alt={`project name: ${project.name}`} />
                                            <div className="separator"></div>
                                            <div>{project.name}</div>
                                        </a>
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
        portfolios: Project[]
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
                            this.state.portfolios.map((project: Project, ind) => {
                                return (
                                    <div key={`${project.name}-${ind}`} className="img">
                                        <a href={project.projectURL}>
                                            <img src={project.imageURL} alt={`project name: ${project.name}`} />
                                            <div className="separator"></div>
                                            <div>{project.name}</div>
                                        </a>
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

// add this function if you want
export function domRender() {
    return render(<Index />, document.querySelector(".react-app"));
}
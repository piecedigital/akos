import * as React from "react";
import { Route, Switch } from "react-router";

// a class for constructing a view
export class dangerousHTML {
    route: string;
    html: string;
    className: string;

    constructor(route: string, html: string, className: string = "") {
        this.route = route;
        this.html = html;
        this.className = className;
    }
}

// puts together a React view based on the "dangerouslySetInnerHTML" React property
// works for static sites
export function dangerouslySetHTML(pages: dangerousHTML[]) {
    return class HTML extends React.Component {
        render() {
            return (
                <Switch>
                    {
                        pages.map((html, ind) =>
                            <Route key={ind} exact path={html.route} component={(props) =>
                                <div className={html.className} dangerouslySetInnerHTML={{
                                    __html: html.html
                                }}></div>} />
                        )
                    }
                </Switch>
            );
        }
    }
}
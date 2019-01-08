import { dangerouslySetHTML, dangerousHTML } from "../../modules/react-helpers";
import { readFileSync } from "fs";
import { join } from "path";

export function danger() {
    // html files are already in relative dist folder. only ts files get moved
    const header = readFileSync(join(__dirname, "partials/header.html")).toString();
    const footer = readFileSync(join(__dirname, "partials/footer.html")).toString();

    // the guts of various individual page views
    const homeBody = readFileSync(join(__dirname, "index.html")).toString();
    const foobarBody = readFileSync(join(__dirname, "index.1.html")).toString();

    // putting together page views with the header and footer
    const home = new dangerousHTML("/", `${header}${homeBody}${footer}`);
    const foobar = new dangerousHTML("/foobar", `${header}${foobarBody}${footer}`);

    return dangerouslySetHTML([home, foobar]);
}
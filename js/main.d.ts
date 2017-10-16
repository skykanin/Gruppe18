export as namespace main;

export const locals: {
    [x: string]: any;
    loggedIn: string;
};
export function connection(): any;
export function loadPage(relPath: any): any;
export function changeUsername(username: any): void;
export function reloadPage(): void;
export function SQLquery(query: any, resolve: any): void;
export function query(query: any, callback): void;
export function callback(err: any, rows: any, fields: any): any;
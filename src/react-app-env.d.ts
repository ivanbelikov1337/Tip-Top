
declare module "*.module.css" {
    const content: Record<string, string>;
    export default content;
}
declare module '*.css' {
    const classNames: Record<string, string>;
    export default classNames;
}
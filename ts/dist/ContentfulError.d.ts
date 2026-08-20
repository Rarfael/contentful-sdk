import { Context } from './Context';
declare class ContentfulError extends Error {
    isContentfulError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ContentfulError };

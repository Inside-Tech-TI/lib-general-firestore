export declare class Singleton {
    protected static instances: Map<string, any>;
    static getInstance<T>(key: string, clas: new (...args: any[]) => T, ...args: any[]): T;
}

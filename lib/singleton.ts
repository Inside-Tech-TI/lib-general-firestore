export class Singleton {
  protected static instances: Map<string, any> = new Map<string, any>();
  public static getInstance<T>(
    key: string,
    clas: new (...args: any[]) => T,
    ...args: any[]
  ): T {
    if (!Singleton.instances.has(key)) {
      Singleton.instances.set(key, new clas(...args));
    }
    return Singleton.instances.get(key) as T;
  }
}

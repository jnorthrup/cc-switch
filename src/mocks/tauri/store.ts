export class Store {
    constructor(path: string) { }
    async load() { return {}; }
    async save() { }
    async get(key: string) { return null; }
    async set(key: string, value: any) { }
}

export async function load(path: string, options?: any) {
    console.log(`[Mock Tauri] store.load: ${path}`);
    return new Store(path);
}

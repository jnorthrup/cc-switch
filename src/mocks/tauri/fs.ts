export async function readTextFile(path: string, options?: any) {
    console.log(`[Mock Tauri] fs.readTextFile: ${path}`);
    return "";
}

export async function writeTextFile(path: string, contents: string, options?: any) {
    console.log(`[Mock Tauri] fs.writeTextFile: ${path}`);
}

export async function exists(path: string, options?: any) {
    return false;
}

export async function readDir(path: string, options?: any) {
    return [];
}

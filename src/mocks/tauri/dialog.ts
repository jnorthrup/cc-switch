export async function message(message: string, options?: any) {
    console.log(`[Mock Tauri] dialog.message: ${message}`, options);
    return null;
}

export async function ask(message: string, options?: any) {
    console.log(`[Mock Tauri] dialog.ask: ${message}`, options);
    return false;
}

export async function confirm(message: string, options?: any) {
    console.log(`[Mock Tauri] dialog.confirm: ${message}`, options);
    return false;
}

export async function open(options?: any) {
    console.log(`[Mock Tauri] dialog.open`, options);
    return null;
}

export async function save(options?: any) {
    console.log(`[Mock Tauri] dialog.save`, options);
    return null;
}

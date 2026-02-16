export async function listen(event: string, handler: (event: any) => void) {
    console.log(`[Mock Tauri] listen to event: ${event}`);
    return () => console.log(`[Mock Tauri] unlisten ${event}`);
}

export async function emit(event: string, payload?: any) {
    console.log(`[Mock Tauri] emit event: ${event}`, payload);
}

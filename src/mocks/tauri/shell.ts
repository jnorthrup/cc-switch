export async function open(path: string) {
    console.log(`[Mock Tauri] shell.open: ${path}`);
    window.open(path, '_blank');
}

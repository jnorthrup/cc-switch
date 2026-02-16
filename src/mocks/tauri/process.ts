export async function exit(code: number = 0) {
    console.log(`[Mock Tauri] process.exit with code: ${code}`);
}

export async function relaunch() {
    console.log(`[Mock Tauri] process.relaunch`);
}

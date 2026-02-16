
export class Channel {
    constructor() { }
    onmessage = () => { }
    send = () => { }
}

export class Resource {
    constructor() { }
    close() { }
}

export async function invoke(cmd: string, args: any) {
    console.log(`[Mock Tauri] invoke: ${cmd}`, args);

    if (cmd === "get_provider_models") {
        return [
            { id: "gpt-4", name: "GPT-4 (Mock)", created: Date.now() / 1000 },
            { id: "claude-3-opus", name: "Claude 3 Opus (Mock)", created: Date.now() / 1000 }
        ];
    }

    if (cmd === "get_env_var") {
        return "";
    }

    if (cmd === "get_init_error") {
        return null;
    }

    return null;
}

import { activateProviderTerminalPlugin } from "@soksak/soksak-kit-plugin-terminal";
export function activate(context: { app: Parameters<typeof activateProviderTerminalPlugin>[0]; subscriptions: { dispose(): void }[] }) {
  activateProviderTerminalPlugin(context.app, context.subscriptions, {
    pluginId: "soksak-plugin-terminal-wezterm", engineId: "wezterm", ptySidecarId: "soksak-sidecar-pty", terminalSidecarId: "soksak-sidecar-terminal-wezterm", programId: "terminal-wezterm",
  });
}

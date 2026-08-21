import { describe, expect, it, vi } from "vitest";

const { activateProvider } = vi.hoisted(() => ({ activateProvider: vi.fn() }));
vi.mock("@soksak/soksak-kit-plugin-terminal", () => ({ activateProviderTerminalPlugin: activateProvider }));

import { activate } from "./index";

describe("WezTerm terminal plugin wiring", () => {
  it("selects the WezTerm provider", () => {
    const app = {} as Parameters<typeof activate>[0]["app"];
    activate({ app, subscriptions: [] });
    expect(activateProvider).toHaveBeenCalledWith(app, [], {
      pluginId: "soksak-plugin-terminal-wezterm", engineId: "wezterm",
      providerUnit: "terminal-wezterm", programId: "terminal-wezterm",
    });
  });
});

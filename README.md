# soksak-plugin-terminal-wezterm

Soksak terminal plugin backed by the WezTerm terminal-state sidecar.

The plugin implements `soksak-spec-plugin-terminal` 0.0.1, declares PTY and terminal-state
sidecar requirements, and exposes the common terminal commands, status and operable nodes. The
published plugin archive contains `plugin.json`, `main.js` and its license; provider binaries are
installed independently.

## Verification

```sh
pnpm --dir frontend install --frozen-lockfile
pnpm --dir frontend verify
node scripts/check-release-workflow.mjs
```

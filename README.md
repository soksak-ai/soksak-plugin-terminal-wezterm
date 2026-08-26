# soksak-plugin-terminal-wezterm

Soksak terminal plugin backed by the WezTerm terminal-state sidecar.

The plugin implements `soksak-spec-plugin-terminal` 0.0.1, declares PTY and terminal-state
sidecar requirements, and exposes the common terminal commands, status and operable nodes. The
published plugin archive contains `plugin.json`, `main.js` and its license; provider binaries are
installed independently.

## Verification

The package depends on `@soksak/soksak-contract-plugin-terminal` and `@soksak/soksak-kit-plugin-terminal`,
so every `make` invocation that installs requires `REGISTRY` on the make command line,
`https://registry.npmjs.org` included once the packages are published there. A value from the
environment is refused. The Makefile reads the requirement from `frontend/package.json` and refuses
`REGISTRY required: this package depends on @soksak/...` when it is absent.

The build input is identified by the `pnpm-lock.yaml` integrity, not by `REGISTRY`. pnpm fetches from
`REGISTRY` only a package whose integrity its content-addressable store does not already hold, so a
second install of the same lockfile on the same machine reads the store and never contacts `REGISTRY`.

```sh
make verify REGISTRY=http://host:port/
```

`.node-version`, `frontend/package.json#engines.node`, and
`frontend/package.json#packageManager` are the exact toolchain owners. Make rejects a mismatched
Node architecture or a delegated pnpm executable before running the frozen install. Release Actions
invoke the same Make owner proof through the exact spec package supplied by release-train URL and
SHA-256 inputs.

# soksak-plugin-terminal-wezterm

WezTerm terminal-state sidecar를 사용하는 Soksak 터미널 플러그인입니다.

이 플러그인은 `soksak-spec-plugin-terminal` 0.0.1을 구현하고, PTY와 terminal-state sidecar
요구를 선언하며, 공통 터미널 명령, 상태, operable node를 노출합니다. 게시되는 플러그인
archive는 `plugin.json`, `main.js`, license를 담고 provider binary는 별도로 설치됩니다.

## 검증

이 패키지는 `@soksak/soksak-contract-plugin-terminal`과 `@soksak/soksak-kit-plugin-terminal`에
의존하므로, install을 수행하는 모든 `make` 호출은 make 명령줄의 `REGISTRY`를 요구합니다. 패키지가
`https://registry.npmjs.org`에 게시된 뒤에도 같습니다. 환경 변수로 전달된 값은 거부됩니다. Makefile은
`frontend/package.json`에서 이 요구를 읽고, 없으면
`REGISTRY required: this package depends on @soksak/...`으로 거부합니다.

빌드 입력의 정체성은 `REGISTRY`가 아니라 `pnpm-lock.yaml`의 integrity입니다. pnpm은 content-addressable
store에 없는 integrity의 패키지만 `REGISTRY`에서 받으므로, 같은 기계에서 같은 lockfile을 다시 install하면
store를 읽고 `REGISTRY`에 접속하지 않습니다.

```sh
make verify REGISTRY=http://host:port/
```

정확한 toolchain 정본은 `.node-version`, `frontend/package.json#engines.node`,
`frontend/package.json#packageManager`입니다. Make는 frozen install 전에 Node architecture가
다르거나 pnpm executable이 다른 버전에 위임된 환경을 거부합니다. 릴리스 Actions도 release
train이 URL과 SHA-256으로 전달한 정확한 spec package를 통해 같은 Make owner proof를 실행합니다.

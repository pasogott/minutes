#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
model=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --model)
      model="${2:-}"
      shift 2
      ;;
    *)
      echo "unknown argument: $1" >&2
      exit 2
      ;;
  esac
done

case "$model" in
  legacy|community-1) ;;
  *)
    echo "usage: $0 --model legacy|community-1" >&2
    exit 2
    ;;
esac

cd "$repo_root"
if command -v xcrun >/dev/null 2>&1; then
  export CXXFLAGS="-I$(xcrun --show-sdk-path)/usr/include/c++/v1"
fi

# Models are deliberately downloaded at evaluation time rather than committed.
cargo run -q -p minutes-cli --no-default-features --features diarize -- \
  setup --diarization --model "$model"
cargo run -q -p minutes-core --no-default-features --features diarize \
  --example diarization_eval -- --model "$model"

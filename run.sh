#!/bin/bash

set -o errexit -o nounset -o pipefail

base_path="$(dirname "$(realpath -s "$0")")/src"

rpc_file="${base_path}/rpcs.json"
comma_separated_rpc_base_urls=$(
  jq --raw-output \
    '.[]
       | .url
         # remove the protocol (like https) by removing everything before `//`
       | sub(".*//"; "")
         # only take base URL by removing everything after `/`
       | sub("/.*"; "")
    ' "$rpc_file" \
    | tr '\n' ',' \
    | head --bytes=-1
)

# Explanation for the flags:
# - `NODE_EXTRA_CA_CERTS`: if using ethers npm package and this is denied, the
#   script errors out with "Error: could not detect network".
# - `WS_NO_BUFFER_UTIL`: script crashes without access
#   https://www.npmjs.com/package/ws?activeTab=readme
# - `--deny-read`: do not prompt for permission to read the node_modules cache,
#   which is triggered by the npm module import of ethers.
# - `--allow-net=...`: list of nodes that the script is expected to connect to.
# - `--allow-write=./out`: this is the folder that collects the script's output.
deno run \
  --deny-read \
  --allow-write="./out" \
  --allow-env='NODE_EXTRA_CA_CERTS,WS_NO_BUFFER_UTIL' \
  --allow-net="$comma_separated_rpc_base_urls" \
  -- \
  "$base_path/replace-owners.ts" \
  "$@"

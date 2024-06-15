argv=("$@")
argc=$#

for (( j = 0; j < argc; ++j )); do
 ./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:./${argv[j]}/proto \
  --ts_out=./${argv[j]}/proto  \
  --grpc_out=grpc_js:./${argv[j]}/proto \
   --proto_path=./${argv[j]}/proto \
  ./${argv}/proto/${argv[j]}.proto
done

argv=("$@")
 ./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:./. \
  --ts_out=./.  \
  --grpc_out=grpc_js:./. \
   --proto_path=./. \
  ./${argv}/proto/${argv}.proto

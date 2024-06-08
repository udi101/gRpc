argv=("$@")
 ./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=./.  \
  ./${argv}/proto/${argv}.proto

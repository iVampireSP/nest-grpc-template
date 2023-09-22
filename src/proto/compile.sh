#!/bin/bash

protoc \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--descriptor_set_out=./src/proto/descriptor_set.bin \
--include_imports \
--ts_proto_opt=outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false,nestJs=true \
--ts_proto_out=. ./src/proto/auth.proto
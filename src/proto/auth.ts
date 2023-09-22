/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface UserLoginRequest {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  success: boolean;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface UserServiceClient {
  login(request: UserLoginRequest): Observable<UserLoginResponse>;
}

export interface UserServiceController {
  login(request: UserLoginRequest): Promise<UserLoginResponse> | Observable<UserLoginResponse> | UserLoginResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["login"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";

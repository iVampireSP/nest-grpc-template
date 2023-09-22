import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { UserLoginRequest, UserLoginResponse } from 'src/proto/auth';

@Controller('auth')
export class AuthController {
    @GrpcMethod('account', 'Login')
    Login(data: UserLoginRequest, metadata: Metadata, call: ServerUnaryCall<any, any>): UserLoginResponse {

        console.log(data, metadata, call)

        return {
            success: true
        }
    }
}

import {Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { UsersController } from '../controllers/users.controller';

@Module({
    controllers: [UsersController],
    modules: [],
})
export class ApplicationModule {}
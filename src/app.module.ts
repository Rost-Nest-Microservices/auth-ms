import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { NatsModule } from './nats/nats.module';

@Module({
  imports: [AuthModule, NatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

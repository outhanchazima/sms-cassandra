import { Module } from '@nestjs/common';
import { CassandraModule } from './common/cassandra/cassandra.module';
import { SmsModule } from './sms/sms.module';

@Module({
  imports: [CassandraModule, SmsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

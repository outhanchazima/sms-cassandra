import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { SmsRepository } from './sms.repository';
import { CassandraModule } from 'src/common/cassandra/cassandra.module';

@Module({
  imports: [CassandraModule],
  providers: [SmsService, SmsRepository],
  controllers: [SmsController],
  exports: [SmsService, SmsRepository],
})
export class SmsModule {}

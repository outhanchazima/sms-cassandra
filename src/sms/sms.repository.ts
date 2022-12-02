import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { Sms } from './sms.model';
import { CassandraService } from 'src/common/cassandra/cassandra.service';

@Injectable()
export class SmsRepository implements OnModuleInit {
  constructor(private cassandraService: CassandraService) {}

  smsMapper: mapping.ModelMapper<Sms>;

  onModuleInit() {
    const mappingOptions: mapping.MappingOptions = {
      models: {
        Sms: {
          tables: ['sms'],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };

    this.smsMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel('Sms');
  }

  async getAllSms(): Promise<Sms[]> {
    return (await this.smsMapper.findAll()).toArray();
  }

  async getSmsById(id: string): Promise<Sms> {
    return await this.smsMapper.get({ id });
  }

  async updateSmsStatus(sms: Sms) {
    return await this.smsMapper.update(sms);
  }

  async createSms(sms: Sms) {
    return await this.smsMapper.insert(sms);
  }
}

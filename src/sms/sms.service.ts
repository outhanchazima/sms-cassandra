import { Injectable } from '@nestjs/common';
import { time } from 'console';
import { randomUUID } from 'crypto';
import { CreateSmsDto } from './dto/create-sms.dto';
import { Sms } from './sms.model';
import { SmsRepository } from './sms.repository';

@Injectable()
export class SmsService {
  constructor(private smsRepository: SmsRepository) {}

  async getAllSms() {
    return this.smsRepository.getAllSms();
  }

  async getSmsById(id: string): Promise<Sms> {
    return this.smsRepository.getSmsById(id);
  }

  async createSms(createSmsDto: CreateSmsDto) {
    const sms: Sms = {
      id: randomUUID(),
      status: createSmsDto.status,
      message: createSmsDto.message,
      createdat: Date.now(),
      updatedat: Date.now(),
    };

    return this.smsRepository.createSms(sms);
  }

  async updateSms(sms: Sms) {
    return this.smsRepository.updateSmsStatus(sms);
  }
}

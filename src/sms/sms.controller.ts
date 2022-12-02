import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSmsDto } from './dto/create-sms.dto';
import { Sms } from './sms.model';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {
  constructor(private smsService: SmsService) {}

  @Get()
  async getAllSms(): Promise<Sms[]> {
    return this.smsService.getAllSms();
  }

  @Get(':id')
  async getSmsById(@Param('id') id: string): Promise<Sms> {
    return this.smsService.getSmsById(id);
  }

  @Post()
  async createSms(@Body() createSmsDto: CreateSmsDto) {
    return this.smsService.createSms(createSmsDto);
  }

  @Put()
  async updateSms(
    @Param('id') id: string,
    @Body() createSmsDto: CreateSmsDto,
  ): {
    const sms: Sms = {
      id: id,
      message: createSmsDto.message,
      status: createSmsDto.status,
    };
    return this.smsService.updateSms(sms);
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('settings')
export class SettingsController {
  @Get('/')
  test() {
    return 'Settings page';
  }
}

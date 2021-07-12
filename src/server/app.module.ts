import { routes } from './routes';
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { ViewModule } from './view/view.module';
import { UserModule } from './user/user.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [RouterModule.register(routes), ViewModule, UserModule, SettingsModule],
})
export class AppModule {}

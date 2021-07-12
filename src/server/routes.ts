import { SettingsModule } from './settings/settings.module';
import { UserModule } from './user/user.module';

export const routes = [
  {
    path: 'api',
    children: [UserModule, SettingsModule],
  },
];

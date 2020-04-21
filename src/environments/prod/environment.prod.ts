import { sharedEnvironment } from '../environment.shared';
import { awsEnvironment } from '../environment.aws';

export const environment = {
  ...sharedEnvironment,
  ...awsEnvironment,
  apiUrl: '',
  apiKey: '',
  production: true,
};
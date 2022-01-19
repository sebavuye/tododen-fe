import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { BrowserOptions } from '@sentry/react';

const sentryOptions: BrowserOptions = {
  dsn: 'https://e2d4924531da4bc49ab2c3be56ad975b@o1117453.ingest.sentry.io/6151306',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0
};

export const initializeSentry = () => Sentry.init({ ...sentryOptions });

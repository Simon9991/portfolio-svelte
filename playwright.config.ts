import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    webServer: {
        command: 'pnpm build && pnpm preview',
        url: 'http://localhost:5173',
        reuseExistingServer: !process.env.CI
    },
    testDir: 'tests',
    testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;

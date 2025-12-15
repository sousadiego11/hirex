import { Hono } from 'hono';
import { logger } from './infra/logger';

const app = new Hono();

const hirexBanner = `
██╗  ██╗██╗██████╗ ███████╗██╗  ██╗
██║  ██║██║██╔══██╗██╔════╝╚██╗██╔╝
███████║██║██████╔╝█████╗   ╚███╔╝ 
██╔══██║██║██╔══██╗██╔══╝   ██╔██╗ 
██║  ██║██║██║  ██║███████╗██╔╝ ██╗
╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝

Hirex • Recruitment Platform API
`;

logger.info(hirexBanner);

app.get('/', (c) => c.text('Hello Bun!'));

export default app;

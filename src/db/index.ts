import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from './schema';

// 개발 환경에서 Hot Reload 시 연결이 중복 생성되는 것을 방지
const globalForDb = global as unknown as { conn: Pool | undefined };

const pool =
  globalForDb.conn ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== 'production') globalForDb.conn = pool;

export const db = drizzle(pool, { schema });

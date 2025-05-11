import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "prefix" varchar;
    CREATE INDEX IF NOT EXISTS "media_prefix_idx" ON "media" USING btree ("prefix");
  `)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
    DROP INDEX IF EXISTS "media_prefix_idx";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "prefix";
  `)
}

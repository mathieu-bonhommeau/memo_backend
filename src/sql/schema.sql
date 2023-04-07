
DROP TABLE IF EXISTS
    environments,
    tips;

CREATE TABLE IF NOT EXISTS environments (
    "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    "name" varchar(255) UNIQUE,
    "details" text,
    "created_at" timestamptz default current_timestamp,
    "updated_at" timestamptz NULL

);

CREATE TABLE IF NOT EXISTS tips (
    "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    "command" varchar(255),
    "description" text,
    "created_at" timestamptz default current_timestamp,
    "updated_at" timestamptz NULL,
    "environment_id" uuid
);

ALTER TABLE tips
    ADD CONSTRAINT fk_environment_tips FOREIGN KEY ("environment_id") REFERENCES environments ("id");

CREATE OR REPLACE VIEW environment_with_tips AS
SELECT e.id as environment_id, e.name, t.id, t.command, t.description from environments as e
JOIN tips as t on e.id = t.environment_id;
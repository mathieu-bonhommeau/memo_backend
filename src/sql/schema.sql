
DROP TABLE IF EXISTS
    environments,
    tips;

CREATE TABLE IF NOT EXISTS environments (
    id uuid PRIMARY KEY,
    name varchar(255) UNIQUE,
    details text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);

CREATE TABLE IF NOT EXISTS tips (
    id uuid PRIMARY KEY,
    command varchar(255),
    description text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    environment_id uuid
);

ALTER TABLE tips
    ADD CONSTRAINT fk_environment_tips FOREIGN KEY (environment_id) REFERENCES tips (id);
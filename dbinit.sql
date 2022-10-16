DROP DATABASE IF EXISTS connect;
CREATE DATABASE IF NOT EXISTS connect;

DROP SCHEMA IF EXISTS connect_schema CASCADE;
CREATE SCHEMA connect_schema;

CREATE TABLE connect_schema.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name STRING,
    location STRING
);
CREATE TABLE connect_schema.groups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title STRING,
    max_size INT,
    tags STRING ARRAY,
    description STRING,
    location STRING
);
CREATE TABLE connect_schema.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES connect_schema.users(id),
    group_id UUID REFERENCES connect_schema.groups(id),
    text STRING
);
CREATE TABLE connect_schema.members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES connect_schema.users(id),
    group_id UUID REFERENCES connect_schema.groups(id)
);

INSERT INTO connect_schema.users (id, name, location) VALUES ('acde070d-8c4c-4f0d-9d8a-162843c10333', 'Evan Hu', 'Berkeley'), ('acde070d-8c4c-4f0d-9d8a-162843c10334', 'Clara Yoo', 'Alameda');

INSERT INTO connect_schema.groups (id, title, max_size, tags, description, location) 
VALUES ('acde070d-8c4c-4f0d-9d8a-162843c10333', 'Basketball', 20, ARRAY ['sports', 'basketball'], 'Bears playing basketball.', 'Berkeley');

INSERT INTO connect_schema.messages (id, user_id, group_id, text) VALUES ('acde070d-8c4c-4f0d-9d8a-162843c10333', 'acde070d-8c4c-4f0d-9d8a-162843c10333', 'acde070d-8c4c-4f0d-9d8a-162843c10333', 'Let''s play today!'), ('acde070d-8c4c-4f0d-9d8a-162843c10334', 'acde070d-8c4c-4f0d-9d8a-162843c10334', 'acde070d-8c4c-4f0d-9d8a-162843c10333', 'Sure! When?');

INSERT INTO connect_schema.members (id, user_id, group_id) VALUES ('acde070d-8c4c-4f0d-9d8a-162843c10333', 'acde070d-8c4c-4f0d-9d8a-162843c10333', 'acde070d-8c4c-4f0d-9d8a-162843c10333'), ('acde070d-8c4c-4f0d-9d8a-162843c10334', 'acde070d-8c4c-4f0d-9d8a-162843c10334', 'acde070d-8c4c-4f0d-9d8a-162843c10333');

DROP TABLE IF EXISTS snow_removers CASCADE;

CREATE TABLE snow_removers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
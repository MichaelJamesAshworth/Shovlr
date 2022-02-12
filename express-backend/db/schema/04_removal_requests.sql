DROP TABLE IF EXISTS removal_requests CASCADE;

CREATE TABLE removal_requests(
  id SERIAL PRIMARY KEY NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  users_email VARCHAR(255) NOT NULL,
  total_cents INTEGER,
  size INTEGER NOT NULL,
  note TEXT,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  snow_remover_id INTEGER REFERENCES snow_removers(id),
  address_id INTEGER REFERENCES addresses(id)
);
CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR (20) NOT NULL,
    email VARCHAR (40) NOT NULL,
    user_name VARCHAR (40) NOT NULL,
    password VARCHAR (10) NOT NULL
);

CREATE TABLE locations (
    id serial PRIMARY KEY,
    state_name text,
    location_name text,
    location_description text,
    location_activities text
);

CREATE TABLE activities (
    id serial PRIMARY KEY,
    activity_name text,
    activity_level text,
    activity_terrain text
);


CREATE TABLE reviews (
    id serial PRIMARY KEY,
    score integer,
    content text,
    locations_id integer REFERENCES locations(id),
    user_id integer REFERENCES users (id)
);
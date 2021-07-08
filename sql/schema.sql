CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR (20) NOT NULL,
    email VARCHAR (40) NOT NULL,
    user_name, VARCHAR (40) NOT NULL,
    password VARCHAR (10) NOT NULL
);

CREATE TABLE locations (
    id serial PRIMARY KEY,
    state_name text,
    location_name text,
    location_image image,
    location_description VARCHAR (100),
    location_activities text
);

CREATE TABLE activities (
    activity_name text,
    activity_level text,
    activity_terrain text,
);


CREATE TABLE reviews (

);
INSERT INTO users
    (name, email, user_name, password)
VALUES
    ('Alyna', 'alyna@fakeemail.com', 'Alyna_fake', 'abc'),
    ('Brittany', 'brittany@fakeemail.com', 'Brittany_fake', 'xyz'),
    ('Joshua', 'joshua@fakeemail.com', 'Joshua_fake', '123');

INSERT INTO locations
    (state_name, locations_name, locations_description, locations_images, locations_activities)
VALUES
    ('Texas', 'Lake Allatoona', 'Peaceful and calm waters', '/images/kayaking_lake_allatoona.jpg', 'Kayaking'),
    ('Texas', 'Good Water Loop',  'Features a lake and 26.9 trail', '/images/???', 'Backpacking and Hiking'),
    ('Texas', 'Barnwell Mountain Recreation Area Loop', 'Wooded area with dirt trails and shallow water crossings', '/images/barnewell_mountain_ohv.jpg', 'OHV');

INSERT INTO activities
    (activity_name, activity_level, activity_terrain)
VALUES
    ('hiking', 'moderate', 'unpaved'),
    ('kayaking', 'easy', 'river'),
    ('backpacking', 'difficult', 'varrying terrian');

-- BOOKINGS --

INSERT INTO reviews
    (score, content, locations_id)
VALUES
    (5, 'Soooo much fun', 1),
    (5, 'Amazing experience! Beautiful and Peaceful', 2),
    (5, 'This place is a gem! Grateful to have found this trail', 3);

-- NEED TO ADD ITINERARY BUT YA GIRL IS SLEEPY --
INSERT INTO itinerary
    (locations_id, activities_id, bookings_id, reviews_id)
VALUES
(),
(),
();
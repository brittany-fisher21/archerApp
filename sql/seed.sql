INSERT INTO users

    (name, email, user_name, password)

VALUES
    ('Alyna', 'alyna@fakeemail.com', 'alyna_fake', 'passA'),

    ('Brittany', 'brittany@fakeemail.com', 'brittany_fake', 'passB'),

    ('Joshua', 'joshua@fakeemail.com', 'joshua_fake', 'passC');

INSERT INTO locations

    (state_name, location_name, location_description, location_image location_activities)

VALUES

    ('Texas', 'Lake Allatoona', 'Peaceful and calm waters', '/images/#', 'Kayaking'),

    ('Texas', 'Good Water Loop',  'Features a lake and 26.9 trail', '/images/#', 'Backpacking and Hiking'),

    ('Texas', 'Barnwell Mountain Recreation Area Loop', 'Wooded area with dirt trails and shallow water crossings', '/images/#', 'OHV');

INSERT INTO activities

    (activity_name, activity_level, activity_terrain)

VALUES

    ('hiking', 'moderate', 'unpaved'),

    ('kayaking', 'easy', 'river'),

    ('backpacking', 'difficult', 'varrying terrian');

INSERT INTO bookings

    (booking_name, booking_location, booking_description, booking_image, booking_price)

VALUES

    ('name', 'location', 'description', '/images/#', 99),

    ('name', 'location', 'description', '/images/#', 99),

    ('name', 'location', 'description', '/images/#', 99);

INSERT INTO reviews

    (score, content, locations_id)

VALUES

    (5, 'Soooo much fun', 1),

    (5, 'Amazing experience! Beautiful and Peaceful', 2),

    (5, 'This place is a gem! Grateful to have found this trail', 3);

INSERT INTO itinerary

    (locations_id, activities_id, bookings_id, reviews_id)

VALUES

(3, 1, 1, 3),
(2, 2, 2, 2),
(1, 3, 3, 1);
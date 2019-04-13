DROP DATABASE IF EXISTS  moviesdatabase;
CREATE DATABASE  moviesdatabase;

\c moviesdatabase;

CREATE TABLE genres (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL);


CREATE TABLE movies (
id SERIAL PRIMARY KEY,
title VARCHAR NOT NULL, --unique
genre_id INT REFERENCES genres(id)NOT NULL, --unique
img_url VARCHAR NOT NULL
);   



CREATE TABLE ratings(
id SERIAL PRIMARY KEY,
stars INT NOT NULL,
movie_id INT REFERENCES movies(id) NOT NULL);


CREATE TABLE comments(
id SERIAL PRIMARY KEY,
text VARCHAR NOT NULL,
movie_id INT REFERENCES movies(id) NOT NULL);



INSERT INTO genres (name) VALUES
('comedy'),
('thriller'),
('action'),
('romance'),
('animation');

INSERT INTO movies (title,genre_id,img_url) VALUES
('shazam',1,'https://assets.www.warnerbros.com/sites/default/files/movies/media/browser/Shazam_2000x3000.png'),
('hangover',1, 'https://is2-ssl.mzstatic.com/image/thumb/Video60/v4/b3/1b/fd/b31bfd4a-9ef4-86cf-ec63-148c75394cb6/pr_source.lsr/268x0w.png' ),
('the shining',2,'https://i.etsystatic.com/8353265/r/il/a71b41/535137317/il_794xN.535137317_d37p.jpg' ),
('the conjuring',2,'https://images-na.ssl-images-amazon.com/images/I/51XZ4OitzbL.jpg'),
('ghostbusters',3,'https://images-na.ssl-images-amazon.com/images/I/417EyUCBJ-L.jpg'),
('wonder woman',3,'https://images-na.ssl-images-amazon.com/images/I/512xf6XhxgL.jpg'),
('the proposal',4,'https://thecentraltrend.com/wp-content/uploads/2017/04/imgres-1.jpg'),
('the notebook',4, 'https://images-na.ssl-images-amazon.com/images/I/51Td3Eetr5L.jpg'),
('moana',5,'https://images-na.ssl-images-amazon.com/images/I/71Vq7L0ZBwL._SY679_.jpg'), 
('inside out',5, 'https://cdn.europosters.eu/image/750/posters/inside-out-silhouette-i27865.jpg');


INSERT INTO ratings (stars,movie_id) VALUES
(2,1),(3,1),
(3,2),(5,2),
(5,3),(5,3),
(2,4), (3,4),
(3,5),(5,5),
(5,6),(5,6),
(2,7), (3,7),
(3,8),(5,8),
(3,9),(5,9),
(3,10),(5,10);



INSERT INTO comments (text,movie_id) VALUES
('nice',1),
('this movie is so good',2),
('awww i love the ending',3),
('awesome',4),
('rotten tomatoes',5),
('money wasted',6),
('loved it',7),
('two thumbs up',8),
('never again',9),
('what a waste',10),
('saw it twice',1),
('movie is so long',1),
('will buy in dvd',2),
('wasted money',3),
('going tomorrow',5);
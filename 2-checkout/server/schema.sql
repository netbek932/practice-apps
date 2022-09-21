USE checkout;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  session_id VARCHAR(60) NOT NULL,
  name VARCHAR(100) DEFAULT '',
  email VARCHAR(40) DEFAULT '',
  password VARCHAR(40) DEFAULT '',
  address1 VARCHAR(100) DEFAULT '',
  address2 VARCHAR(100) DEFAULT '',
  city VARCHAR(40) DEFAULT '',
  state VARCHAR(40) DEFAULT '',
  zip INT(10) DEFAULT NULL,
  phone INT(10) DEFAULT NULL,
  credit_card INT(16) DEFAULT NULL,
  expiration_date DATE DEFAULT NULL,
  cvv INT(3) DEFAULT NULL,
  billing_zip INT(10) DEFAULT NULL
)
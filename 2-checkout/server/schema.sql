USE checkout;

CREATE TABLE customer (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(40) NOT NULL,
  password VARCHAR(40) NOT NULL,
  address1 VARCHAR(100) NOT NULL,
  address2 VARCHAR(100),
  city VARCHAR(40) NOT NULL,
  state VARCHAR(40) NOT NULL,
  zip INT(10) NOT NULL,
  phone INT(10) NOT NULL,
  credit_card INT(16) NOT NULL,
  expiration_date DATE NOT NULL,
  cvv INT(3) NOT NULL,
  billingZip INT(10) NOT NULL
)
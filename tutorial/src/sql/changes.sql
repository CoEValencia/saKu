CREATE TABLE USERS (
   ID                            BIGINT(16)      NOT NULL PRIMARY KEY AUTO_INCREMENT,
   USERNAME                      VARCHAR(10)    NOT NULL,
   PASSWORD                      VARCHAR(50),
   FIN_VIGENCIA_PASS             DATE,
   NOMBRE                        VARCHAR(50),
   APELLIDO1                     VARCHAR(50),
   APELLIDO2                     VARCHAR(50),
   EMAIL                         VARCHAR(50),
   ENABLED                       CHAR(1)       NOT NULL DEFAULT 'Y',
   USERPIC 						 CHAR(50),

   CONSTRAINT AK_USERS_USERNAME UNIQUE (USERNAME),
   CONSTRAINT AK_USERS_EMAIL UNIQUE (EMAIL)
);

CREATE TABLE AUTHORITY (
  ID            BIGINT(16)       NOT NULL PRIMARY KEY AUTO_INCREMENT,
  USER_ID       BIGINT(16)       NOT NULL,
  AUTHORITY     VARCHAR(50)     NOT NULL,
  
  CONSTRAINT FK_AUTHORITY_USUARIO FOREIGN KEY (USER_ID) REFERENCES USERS (ID)
);

/* Tabla USUARIO, passwords hasheados con sha1 iguales al nombre de usuario + id como salt*/

INSERT INTO USERS (ID, USERNAME, PASSWORD, FIN_VIGENCIA_PASS, EMAIL, NOMBRE, USERPIC) VALUES (1, 'demo', sha1('demo{1}'), '2020-12-31', 'demo@domain.com', 'Demo user', 'img/cat-icon.png');
INSERT INTO USERS (ID, USERNAME, PASSWORD, FIN_VIGENCIA_PASS, EMAIL, NOMBRE, USERPIC) VALUES (2, 'admin', sha1('admin{2}'), '2020-12-31', 'admin@domain.com', 'Administrator', 'img/default-icon.png');
INSERT INTO USERS (ID, USERNAME, PASSWORD, FIN_VIGENCIA_PASS, EMAIL, NOMBRE, USERPIC) VALUES (3, 'user0', sha1('user0{3}'), '2020-12-31', 'user0@domain.com', 'User0', 'img/penguin-icon.png');

/* Tabla AUTHORITY*/

INSERT INTO AUTHORITY (USER_ID, AUTHORITY) VALUES ((SELECT id FROM users WHERE username = 'admin'), 'ROLE_ADMIN');
INSERT INTO AUTHORITY (USER_ID, AUTHORITY) VALUES ((SELECT id FROM users WHERE username = 'user0'), 'ROLE_ADMIN');
/*Roles de devon para que los usuario puedan entrar a la aplicación*/
INSERT INTO AUTHORITY (USER_ID, AUTHORITY) SELECT id, 'ROLE_USER' FROM USERS;


/* Tabla Stream */
CREATE TABLE STREAM (
   ID                    BIGINT(16)      NOT NULL PRIMARY KEY AUTO_INCREMENT,
   NAME                  VARCHAR(50)     NOT NULL
);

/* Tabla Flow*/
CREATE TABLE FLOW (
  ID                     BIGINT(16)       NOT NULL PRIMARY KEY AUTO_INCREMENT,
  STREAM_ID              BIGINT(16)       NOT NULL,
  NAME                   VARCHAR(50)      NOT NULL,
  
  CONSTRAINT FK_STREAM_ID FOREIGN KEY (STREAM_ID) REFERENCES STREAM (ID)
);

/* Tabla Mensajes*/
CREATE TABLE MESSAGE (
  ID                     BIGINT(16)       NOT NULL PRIMARY KEY AUTO_INCREMENT,
  USER_ID                BIGINT(16)       NOT NULL,
  FLOW_ID                BIGINT(16)       NOT NULL,
  MESSAGE                VARCHAR(250)     NOT NULL,
  
  CONSTRAINT FK_FLOW_ID FOREIGN KEY (FLOW_ID) REFERENCES FLOW (ID),
  CONSTRAINT FK_USER_ID FOREIGN KEY (USER_ID) REFERENCES USERS (ID)
);

/* DEFAULT STREAM*/
INSERT INTO STREAM (Name) VALUES ('Default Stream');

/* DEFAULT FLOWS*/
INSERT INTO FLOW (Name,STREAM_ID) VALUES ('[MAIN]',1);
INSERT INTO FLOW (Name,STREAM_ID) VALUES ('Trabajo',1);
INSERT INTO FLOW (Name,STREAM_ID) VALUES ('Ocio',1);

/* DEFAULT MESSAGES*/
INSERT INTO MESSAGE (MESSAGE,FLOW_ID,USER_ID) VALUES ('Hola, ¿Que tal?',1,1);
INSERT INTO MESSAGE (MESSAGE,FLOW_ID,USER_ID) VALUES ('¿Que se cuenta la gente?',1,1);
INSERT INTO MESSAGE (MESSAGE,FLOW_ID,USER_ID) VALUES ('Hola',1,3);
INSERT INTO MESSAGE (MESSAGE,FLOW_ID,USER_ID) VALUES ('¡Cuánto tiempo sin verte!',1,3);


/* Tabla Favoritos. Cada usuario puede tener unos chats favoritos*/
CREATE TABLE FAVS (
  ID                     BIGINT(16)       NOT NULL PRIMARY KEY AUTO_INCREMENT,
  USER_ID                BIGINT(16)       NOT NULL,
  STREAM_ID              BIGINT(16)       NOT NULL,
  
 FOREIGN KEY (STREAM_ID) REFERENCES STREAM (ID),
 FOREIGN KEY (USER_ID) REFERENCES USERS (ID)
);


/* Default values for FAVS*/
INSERT INTO FAVS (USER_ID, STREAM_ID) VALUES (2, 1);
INSERT INTO FAVS (USER_ID, STREAM_ID) VALUES (2, 1);

/* ALTER TABLE MESSAGE ADDING DATE */
ALTER TABLE MESSAGE 
  ADD COLUMN DATE DATETIME NOT NULL DEFAULT '2016-07-01 00:00:00' AFTER MESSAGE;

  --SOLO PARA NOSOTROS--
  
/* ALTER TABLE USERS ADDING USERPIC*/
 ALTER TABLE USERS
  ADD USERPIC CHAR(50);

 /* UPDATE TABLE USERS ADDING USERPIC DEFAULT VALUE*/ 
 UPDATE users set USERPIC='img/default-icon.png' WHERE USERPIC IS NULL;
 
  /* UPDATE TABLE USERS ADDING USERPIC TO 'demo' USER*/ 
 UPDATE users set USERPIC='img/cat-icon.png' WHERE USERNAME='demo';
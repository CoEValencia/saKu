# saKu

#### Chirr - 2016

![alt tag](https://github.com/CoEValencia/saKu/blob/master/tutorial/src/main/webapp/img/muestra.jpg)

Alba Baron Rubio - albabaronrubio@gmail.com
Cynthia España Sanjuan - sakura.sk@gmail.com
Jesús Juan Aguilar - jesusjuanaguilar@gmail.com
Yahve Perez Abadia

#### Documentacion

Clonar el proyecto 
```
git clone https://github.com/CoEValencia/saKu.git
```

#### Crear la base de datos
> Utilizar el MySQL del entorno Devon. Crear esquema MySQL y un usuario con derechos sobre el esquema:

´´´
create schema tutorial;
use tutorial;
create user 'tutorial'@'localhost' identified by 'tutorial';
grant all privileges on tutorial.* to 'tutorial'@'localhost';
flush privileges;

´´´

> A continuacion ejecutar el script SQL del proyecto descargado Saku. Dicho script se encuentra 'entornoFwk\workspace\saKu\tutorial\src\sql\changes.sql'.

´´´
source workspace\saKu\tutorial\src\sql\changes.sql;
´´´ 

> El contexto de la aplicación deberá contener una entrada JNDI al datasource. Esto se puede hacer modificando el fichero server.xml del Tomcat. En el proyecto "Servers" que se acaba de crear en el workspace, editar el fichero "tutorial-server-config/server.xml" con los siguientes datos.

´´´
<Context docBase="tutorial" path="/tutorial" reloadable="false" 
         source="org.eclipse.jst.jee.server:tutorial">
    <Resource name="jdbc/tutorial" username="tutorial" password="tutorial"
         url="jdbc:mysql://localhost:3306/tutorial?autoReconnect=true"
         type="javax.sql.DataSource"
         auth="Container" driverClassName="com.mysql.jdbc.Driver"
         maxActive="100" maxIdle="30" maxWait="10000" 
    />
</Context>
´´´



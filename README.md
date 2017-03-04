# albiononlinedb

To get started:
* git clone https://github.com/ToothpickFactory/albiononlinedb.git
* cd ./albiononlinedb
* npm i

create a default.json file in ./config. Use example.json. You can set the baseUrl to be http://albiononlinedb.com to use the production API's. If working on just the front end don't worry about the other config fields.

To start just the frontend:
* cd src/www
* gulp && gulp serve

Right now working on the server will be a bit rough since you will need mongodb installed and dump of the data. I will be working on getting that available.

You can turn on the entire server by running npm start.

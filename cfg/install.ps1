"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --config "c:\mercurial\mern-example\cfg\mongod.cfg" --install
net start MongoDB
net stop MongoDB

show databases
show collections

db.employees.insert({name: {first: 'John', last: 'Doe'}, age: 44});
db.employees.insert({name: {first: 'John', middle: 'H', last: 'Doe'}, age: 22});

db.employees.find();

db.employees.find().pretty()

db.employees.find({age: 44});
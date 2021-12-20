//Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants
db.restaurants.find( {} ).pretty()

//Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine per tots els documents en la col·lecció Restaurants
db.restaurants.find({},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1}).pretty()

//Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloure el camp _id per tots els documents en la col·lecció Restaurants
db.restaurants.find({},{"_id":0, "restaurant_id":1, "name":1, "borough":1, "cuisine":1}).pretty()

//Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloure el camp _id per tots els documents en la col·lecció Restaurants
db.restaurants.find({},{"_id":0, "restaurant_id":1, "name":1, "borough":1, "address.zipcode":1}).pretty()

//Escriu una consulta per mostrar tot els restaurants que estan en el Bronx
db.restaurants.find({"borough":"Bronx"}).pretty()

//Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx
db.restaurants.find({"borough": "Bronx"}).limit(5).pretty()

//Escriu una consulta per mostrar el pròxim 5 restaurants després de saltar els primers 5 del Bronx
db.restaurants.find({"borough": "Bronx"}).limit(5).skip(5).pretty()

//Escriu una consulta per trobar els restaurants que tenen un score de més de 90
db.restaurants.find({"grades.score":{$gt:90}}).pretty()

//Escriu una consulta per trobar els restaurants que tenen un score de més que 80 però menys que 100
db.restaurants.find({"grades.score":{$gt:80,$lt:100}}).pretty()

//Escriu una consulta per trobar els restaurants quins localitzen en valor de latitud menys que -95.754168
db.restaurants.find({"address.coord.0":{$gt:-95.754168}}).pretty()

//Escriu una consulta de MongoDB per a trobar els restaurants que no preparen cap cuisine de 'American' i el seu puntaje de qualificació superior a 70 i latitud inferior a -65.754168
db.restaurants.find({$and:[{"cuisine":{$ne:"American "}},{"grades.score":{$gt:70}},{"address.coord.0":{$lt:-65.754168}}]}).pretty()

//Escriu una consulta per trobar els restaurants quins no preparen cap cuisine de 'American' i va aconseguir un marcador més que 70 i localitzat en la longitud menys que -65.754168. Nota : Fes aquesta consulta sense utilitzar $and operador
db.restaurants.find({"cuisine":{$ne:"American "},"grades.score":{$gt:70},"address.coord.0":{$lt:-65.754168}}).pretty()

//Escriu una consulta per trobar els restaurants quins no preparen cap cuisine de 'American ' i va aconseguir un punt de grau 'A' no pertany a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent
db.restaurants.find({"cuisine":{$ne:"American "},"grades.grade":{$eq:"A"},"borough":{$ne:"Brooklyn"}}).sort({"cuisine":-1}).pretty()

//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants quin contenir 'Wil' com les tres primeres lletres en el seu nom
db.restaurants.find({name:{$regex :/^Wil/}},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()

//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants quin contenir 'ces' com les últim tres lletres en el seu nom
db.restaurants.find({name:{$regex :"ces$"}},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()

//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants quin contenir 'Reg' com tres lletres en algun lloc en el seu nom
db.restaurants.find({name:{$regex :"Reg"}},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()

//Escriu una consulta per trobar els restaurants quins pertanyen al Bronx i va preparar qualsevol plat American o xinès
db.restaurants.find({borough:"Bronx", $or: [{cuisine:"American "},{cuisine:"Chinese"}]}).pretty()

//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que pertanyen a Staten Island o Queens o Bronxor Brooklyn
db.restaurants.find({$or: [{borough:"Staten Island"},{borough:"Queens"},{borough:"Bronx"},{borough:"Brooklyn"}]},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()

//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que no pertanyen a Staten Island o Queens o Bronxor Brooklyn
db.restaurants.find({$nor: [{borough:"Staten Island"},{borough:"Queens"},{borough:"Bronx"},{borough:"Brooklyn"}]},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()

//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin un marcador quin no és més que 10
db.restaurants.find({"grades.score":{$lte:10}},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()

//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen peix excluint 'American' i 'Chinees' o el name del restaurant comença amb lletres 'Wil'
db.restaurants.find({cuisine:"Seafood", $nor:[{cuisine:"American "},{cuisine:"Chinese"},{name:{$regex:/^Wil/}}]},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()

//Escriu una consulta per trobar el restaurant_id, name, i grades per a aquells restaurants que aconsegueixin un grau "A" i un score 11 en dades d'estudi ISODate "2014-08-11T00:00:00Z"
db.restaurants.find({"grades.grade":"A","grades.score":11,"grades.date":ISODate("2014-08-11T00:00:00Z")},{restaurant_id:1,name:1,grades:1}).pretty()

//Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de varietat de graus conté un grau de "A" i marcador 9 sobre un ISODate "2014-08-11T00:00:00Z"
db.restaurants.find({"grades.1.grade":"A","grades.1.score":9,"grades.1.date":ISODate("2014-08-11T00:00:00Z")},{restaurant_id:1,name:1,grades:1}).pretty()

//Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element del array coord conté un valor quin és més que 42 i fins a 52
db.restaurants.find({"address.coord.1":{$gt:42,$lte:52}},{restaurant_id:1,name:1,"address.coord":1}).pretty()

//Escriu una consulta per organitzar el nom dels restaurants en ordre ascendent juntament amb totes les columnes
db.restaurants.find({}).sort({name: 1, borough:1, cuisine:1, restaurant_id:1}).pretty()

//Escriu una consulta per organitzar el nom dels restaurants en descendir juntament amb totes les columnes
db.restaurants.find({}).sort({name: -1, borough:-1, cuisine:-1, restaurant_id:-1}).pretty()

//Escriu una consulta a organitzar el nom de la cuisine en ordre ascendent i per el mateix barri de cuisine. Ordre descendint
db.restaurants.find({}).sort({cuisine:1, borough:-1}).pretty()

//Escriu una consulta per saber tant si totes les direccions contenen el carrer o no
db.restaurants.find({"address.street":{"$exists" : false}}).pretty()

//Escriu una consulta quin seleccionarà tots el documents en la col·lecció de restaurants on el valor del camp coord és Double
db.restaurants.find({"address.coord.0":{"$type" : "double"}}).pretty()

//Escriu una consulta quin seleccionarà el restaurant_id, name i grade per a aquells restaurants quins retorns 0 com a resta després de dividir el marcador per 7


//Escriu una consulta per trobar el name de restaurant, borough, longitud i altitud i cuisine per a aquells restaurants que contenen 'mon' com tres lletres en algun lloc del seu name
db.restaurants.find({name:{$regex :"mon"}},{name:1,borough:1,"address.coord":1,cuisine:1}).pretty()

//Escriu una consulta per trobar el name de restaurant, borough, longitud i latitud i cuisine per a aquells restaurants que conteinen 'Mad' com primeres tres lletres del seu name
db.restaurants.find({name:{$regex :/^Mad/}},{name:1,borough:1,"address.coord":1,cuisine:1}).pretty()
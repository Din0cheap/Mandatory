'use strict';

const express = require('express');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Constants
const PORT = 8080;

// Connection URL
var url = 'mongodb://mongo:27017/test';



// App
const app = express();
app.get('/', function (req, res) {

    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);	

	var collection = db.collection('arniequotes');

        var doc = {"_id":1, movie:"Predator", quote:"If it bleeds we can kill it!"};
	collection.updateOne({"_id":1}, doc, {upsert:true, w: 1});

	doc = {"_id":2, movie:"Kindergarten Cop", quote:"It\'s not a tumor!"};
	collection.updateOne({"_id":2}, doc, {upsert:true, w: 1});

	doc = {"_id":3, movie:"Terminator", quote:"Hasta La Vista, Baby!"};
	collection.updateOne({"_id":3}, doc, {upsert:true, w: 1});

	doc = {"_id":4, movie:"Total Recall", quote:"Now this is the plan : Get your ass to Mars!"};
	collection.updateOne({"_id":4}, doc, {upsert:true, w: 1});

	doc = {"_id":5, movie:"Terminator", quote:"I\'ll be back"};
	collection.updateOne({"_id":5}, doc, {upsert:true, w: 1});

	doc = {"_id":6, movie:"Commando", quote:"Let off some steam, Bennett"};
	collection.updateOne({"_id":6}, doc, {upsert:true, w: 1});

	doc = {"_id":7, movie:"Total Recall", quote:"See you at the party Richter!"};
	collection.updateOne({"_id":7}, doc, {upsert:true, w: 1});

	doc = {"_id":8, movie:"Conan the Barbarian", quote:"To crush your enemies, see them driven before you, and to hear the lamentation of their women!"};
	collection.updateOne({"_id":8}, doc, {upsert:true, w: 1});


	
	var id = Math.floor(Math.random() * 8) + 1 ;
	

	
	collection.findOne({"_id":id},  function(err, document) {

               res.send( document.quote+'\n- '+document.movie+'\n\n'+'¶¶88¶¶¶¶¶¶¶¶8¶¶¶88¶88¶¶8868¶¶8¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶ \n'+'8¶¶¶¶¶¶¶¶¶8¶26¶2_¶¶¶¶¶866¶¶¶626266¶¶¶¶¶¶¶¶88¶¶¶¶¶¶ \n'+'¶¶¶¶¶¶¶8¶8¶¶¶¶¶¶¶¶¶¶¶¶¶8¶¶¶¶¶68228¶¶¶¶¶¶¶¶¶¶¶8¶¶¶¶ \n'+'¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶88¶¶¶¶¶¶¶¶¶¶¶¶¶¶6¶¶¶ \n'+'¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶8¶¶¶¶¶¶¶8¶¶ \n'+'¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶8¶¶¶¶¶¶¶¶88¶¶¶¶¶¶¶8¶ \n'+'¶¶¶¶¶¶¶¶¶¶¶¶¶8¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶82¶¶¶¶¶¶¶8 \n'+'¶¶¶¶¶¶¶¶¶8111___16686612_____________8¶¶¶¶68¶¶¶¶¶8 \n'+'¶¶¶¶¶¶6_______________________________2¶¶¶¶¶¶¶¶¶¶6 \n'+'¶¶¶¶¶1_________________________________2¶¶828¶¶¶¶¶ \n'+'¶¶¶¶612_________________________________88¶6¶¶¶¶¶¶ \n'+'¶¶¶¶662_________________________________668¶¶¶¶¶¶¶ \n'+'¶¶¶¶822_________________________________628¶¶¶¶¶¶¶ \n'+'¶¶¶¶¶62_________________________________16¶¶¶¶¶¶¶¶ \n'+'¶¶¶¶¶62_________________________________28¶¶¶¶¶¶¶¶ \n'+'¶¶¶¶¶¶2_________________________________6¶¶¶¶¶¶¶¶¶ \n'+'¶¶¶¶¶¶6_________________________________2¶¶¶¶¶¶¶¶¶ \n'+'¶¶¶¶¶6___________________________________6¶¶¶¶¶¶¶¶ \n'+'¶¶¶¶8226668661__________68¶¶¶¶¶666¶81_____¶¶¶¶¶¶88 \n'+'¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶612____26888¶¶¶¶¶¶¶¶¶8_____8¶¶¶¶2_¶\n'+'8¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶6____266¶62¶¶¶681_______¶¶¶¶2__6 \n'+'6¶¶¶¶¶¶¶8_82__211¶1_______________________¶¶¶1___6 \n'+'8¶¶¶88¶86________2________________________¶6_____¶ \n'+'88¶¶1____________8_______________________16_____¶¶ \n'+'¶6¶¶2___________68______________________126_____¶¶ \n'+'88¶¶82_________1¶1______________________18_____1¶¶ \n'+'¶8¶¶¶221_______16_______________________62_____6¶¶ \n'+'¶8¶¶¶¶6621_____88______________________2212¶__8¶¶¶ \n'+'¶88¶¶¶88862___6¶¶¶8612¶¶¶1_____________1212¶¶¶¶¶¶8 \n'+'8¶888¶88886__18¶¶¶¶¶¶¶___________________2_1¶¶¶¶8¶ \n'+'¶¶¶88¶¶86¶6__1__________________________12__¶¶¶¶¶8 \n'+'8¶8¶8¶¶88¶1_161_________________________26___¶¶¶8¶ \n'+'¶¶¶88¶¶¶¶¶___¶¶¶¶¶¶886668¶¶¶61_________1¶____2¶¶¶8 \n'+'¶¶8¶88¶¶¶¶___¶¶¶86____________________1¶2_____8¶88 \n'+'¶8¶8¶8¶¶¶¶1___62222_1_1______________2¶2_______¶¶¶ \n'+'8¶888868¶¶¶6_126221_________________2¶1_________¶¶ \n'+'¶8¶888¶88¶¶¶¶21121_________________6¶____________¶ \n'+'8¶8¶8¶8888¶¶¶81__________________6¶8______________ \n'+'¶8¶8¶8¶8¶888¶¶8________________6¶8______________1¶ \n'+'8¶8¶8¶8¶8¶886¶¶¶21_1_21______6¶¶_______________6¶¶ \n'+'¶¶¶8¶8¶8¶8886¶¶¶¶¶822686226¶¶¶________________¶¶¶¶ \n'+'8888888868668¶¶¶¶¶¶¶8¶¶¶¶¶¶8_________________¶¶¶¶¶\n');
          });




         db.close();
    });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

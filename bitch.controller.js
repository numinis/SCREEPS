/*r roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleJanitor = require('role.janitor');


/*
kijken naar totaal aantal creeps,
kijken naar benodigde werk
werk assignen aan creeps

 _.filter(collection, [predicate=_.identity])
 var creeps = _.filter(Game.creeps, function(creep) { return creep.room == room});

 _.filter(users, function(o) { return !o.active; });
 // ➜ objects for ['fred']


*//*
var controller = {
    handleRoom : function(room) {
        var creeps2 = _.filter(Game.creeps, (creep) => {return creep.room == room});

    }
};

module.exports = controller;

/*
creeps in room task assignen
build over upgrade over maint over spawnsupply, behalve bij tekort aan workers
evt workers spreaden over resources*/

/* 
voor alle creeps in room na eindigen vorige taak
kijken 

*/
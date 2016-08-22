var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleJanitor = require('role.janitor');
var controller = require('bitch.controller');

module.exports.loop = function () {
    for (var index in Memory.creeps) {
        if (!Game.creeps[index]) {
            delete Memory.creeps[index];
        }
    }

    /*
     voor elke room
     controller.roomHandle(roomname)
     */
    /*
     for (var room in Game.rooms) {
     controller.handleRoom(room);
     }

     */



    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    var janitors = _.filter(Game.creeps, (creep) => creep.memory.role == 'janitor');
    console.log('janitors: ' + upgraders.length);

    if(harvesters.length <5) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);}

    if(builders.length <2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK/*,WORK*/,WORK,CARRY,MOVE], undefined, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);}

    if(upgraders.length <2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);}

    if(janitors.length <1) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'janitor'});
        console.log('Spawning new janitor: ' + newName);}

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'janitor') {
            roleJanitor.run(creep);
        }
    }
};
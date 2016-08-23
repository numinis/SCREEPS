/*var roleUpgrader = require('role.upgrader');
 var roleJanitor = {
 run: function (creep) {
 var currentCapacity = creep.room.energyAvailable;
 var totalCapacity = creep.room.energyCapacityAvailable;


 if (creep.carry.energy < creep.carryCapacity) {
 var sources = creep.pos.findClosestByPath(FIND_SOURCES);
 if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
 creep.moveTo(sources);
 }
 }

 else {
 var targets = creep.room.find(FIND_STRUCTURES, {
 filter: (structure) => {
 return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
 structure.energy < structure.energyCapacity;
 }
 });
 if (targets.length > 0) {
 if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
 creep.moveTo(targets[0]);
 }

 }

 }

 if (currentCapacity === totalCapacity && creep.carry.energy === 50){
 roleBuilder.run(creep)
 }
 if(creep.room.find(FIND_CONSTRUCTION_SITES).length == 0){
 roleUpgrader.run(creep)}
 }

 };
 module.exports = roleJanitor;
 */

var roleBuilder = require('role.builder');
var roleHarvester= require('role.harvester')
var roleUpgrader = require('role.upgrader');

var roleJanitor = {
    run: function (creep) {

        if(creep.room.CONTROLLER_DOWNGRADE<2000){
            roleUpgrader.run(creep)
        }
        var structure = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES), { filter: (structure) => { return structure.structureType == STRUCTURE_ROAD  && structure.hits < Math.floor(structure.hitsMax / 2); }});
        var wall = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES), { filter: (structure) => { return structure.structureType == STRUCTURE_WALL  && structure.hits < Math.floor(structure.hitsMax / 2); }});

        if(creep.carry.energy < creep.carryCapacity)
        {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }

        else{ if(creep.repair(structure) == ERR_NOT_IN_RANGE) {
            creep.moveTo(structure)};
        };

    }


}
module.exports = roleJanitor;
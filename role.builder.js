var roleUpgrader = require('role.upgrader');
var roleHarvester = require('role.harvester');
var roleJanitor = require('role.janitor');
//var site = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
var roleBuilder = {
    run: function (creep) {
        var structure = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES), { filter: (structure) => { return structure.structureType == STRUCTURE_ROAD && structure.hits < Math.floor(structure.hitsMax / 2); }});
        if(creep.room.CONTROLLER_DOWNGRADE<1000)
        {
            roleUpgrader.run(creep)
        }
        if (structure.length !== 0)
        {
            roleJanitor.run(creep)
        }
        if(creep.room.find(FIND_CONSTRUCTION_SITES).length == 0){
            roleHarvester.run(creep)}

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');}

        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('building');}

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
    }
};

module.exports = roleBuilder;
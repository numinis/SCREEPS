var roleUpgrader = require('role.upgrader');
var roleBuilder = require ('role.builder');
var roleHarvester = {


    run: function(creep) {
        var currentCapacity = creep.energyAvailable;
        var totalCapacity = creep.energyCapacityAvailable;

        if (currentCapacity === totalCapacity && creep.carry.energy === 50){
         roleBuilder.run(creep)
         }

        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }

        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                    structure.energy < structure.energyCapacity;
            }
        });
        if(targets.length > 0) {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }

        }
        /*else if (creep.room.SPAWN_ENERGY_CAPACITY === StructureSpawn.energyCapacity && creep.carry.RESOURCE_ENERGY === 50){
         roleBuilder.run(creep)
         }*/
    }
}


module.exports = roleHarvester;
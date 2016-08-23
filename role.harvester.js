/*var roleUpgrader = require('role.upgrader');*/
var roleBuilder = require ('role.builder');
var roleUpgrader = require('role.upgrader');
var roleHarvester = {


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
            /*else if (creep.room.SPAWN_ENERGY_CAPACITY === StructureSpawn.energyCapacity && creep.carry.RESOURCE_ENERGY === 50){
             roleBuilder.run(creep)
             }*/
        }

        if (currentCapacity === totalCapacity && creep.carry.energy === 50){
            roleBuilder.run(creep)
        }
        if(creep.room.find(FIND_CONSTRUCTION_SITES).length == 0){
            roleUpgrader.run(creep)}
    }

};



module.exports = roleHarvester;
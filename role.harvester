var capacitySpawn = SPAWN_ENERGY_CAPACITY
var roleUpgrader = require('role.upgrader');
var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
      /*if (capacitySpawn = StructureSpawn.energyCapacity && creep.carry.RESOURCE_ENERGY == 50){
            roleUpgrader.run(creep)
                    }*/
        
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
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
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
	}
};

module.exports = roleHarvester;

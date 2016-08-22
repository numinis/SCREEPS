/* var capacitySpawn = SPAWN_ENERGY_CAPACITY
 var roleBuilder = require('role.builder');
 var roleJanitor = {
 run : function(creep) {
 if(creep.energy === 0) {
 var spawn = creep.pos.findClosest(FIND_MY_SPAWNS);
 var moveResult = creep.moveTo(spawn);
 if( capacitySpawn > 199) {
 var transferResult = spawn.transferEnergy(creep);
 }
 else{
 var roadToRepair = creep.pos.findClosest(FIND_STRUCTURES, {
 filter: function(object){
 return object.structureType === STRUCTURE_ROAD && (object.hits > object.hitsMax / 3);
 }
 });
 if (roadToRepair){
 creep.moveTo(roadToRepair);
 creep.repair(roadToRepair);
 } else {
 roleHarvester.run(creep)
 }
 }
 }
 }
 }
 module.exports = roleJanitor;
 */
/*var structure = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES), { filter: (structure) => { return structure.structureType == STRUCTURE_ROAD && structure.hits < Math.floor(structure.hitsMax / 2); }});*/
var roleBuilder = require('role.builder')
var roleJanitor = {
    run: function (creep) {
        var structure = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES), { filter: (structure) => { return structure.structureType == STRUCTURE_ROAD && structure.hits < Math.floor(structure.hitsMax / 2); }});
        if(creep.carry.energy <10)
        {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }

        if(creep.repair(structure) == ERR_NOT_IN_RANGE) {
            creep.moveTo(structure);
        }
        /* if (structure.length != null && structure.length <1){
         roleBuilder.run(creep)
         }*/
    }


}
module.exports = roleJanitor;
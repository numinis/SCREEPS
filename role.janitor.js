 var capacitySpawn = SPAWN_ENERGY_CAPACITY
 var roleBuilder = require('role.builder');
 var roleJanitor = {
 run : function(creep) {
if(creep.energy === 0) {
    var spawn = creep.pos.findClosest(FIND_MY_SPAWNS);
    var moveResult = creep.moveTo(spawn);
    /*
      check moveResult here
    */
    if( capacitySpawn > 199) {
        var transferResult = spawn.transferEnergy(creep);
        /*
            check transferResult here
        */
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

        // perhaps check the results again?

    } else {

     roleHarvester.run(creep)

    }
}
}
}
}
 module.exports = roleJanitor;

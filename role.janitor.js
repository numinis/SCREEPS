/*var roleJanitor = {
    run: function (creep) {
        var structure = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES), { filter: (structure) => { return structure.structureType == STRUCTURE_ROAD && structure.hits < Math.floor(structure.hitsMax / 2); }});
        if(creep.carry.energy < creep.carryCapacity)
        {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
            if( creep.carry.energy == creep.carryCapacity)
            {
                if(structure == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
                else{
                    repair(structure)
                }
            }

        }
    }


}
module.exports = roleJanitor;*/
var roleBuilder - require ('role.builder')
var roleJanitor = {
    run: function (creep) {
        roleBuilder.run(creep)

    }
}
// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007070704000000000000000000000000010101050707070707070707040000000b0601010101010101010101080000000307010b0b0b0b0b0b0b0b010807040006010106010101010101010101010800060107020b05010b0b0b0b0b0601080006010101010501070707040006010800020b0b0b01060b01010108000601080001070706010101030401080006010800010101020b0b010605010800060108000b060105000601020901080006010800030701070707070701010800060108000601010101010101070707070701080006010b0b0b0b06010101010101010800060107070707020a0a0a0a0a0a0a09070601010101010101010101010101010c`, img`
2 2 2 2 . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
2 2 . . . . . . . . . . 2 . . . 
2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 
2 . . 2 . . . . . . . . . . 2 . 
2 . 2 2 2 2 . 2 2 2 2 2 2 . 2 . 
2 . . . . 2 . 2 2 2 2 . 2 . 2 . 
2 2 2 2 . 2 2 . . . 2 . 2 . 2 . 
. 2 2 2 . . . 2 2 . 2 . 2 . 2 . 
. . . 2 2 2 . 2 2 . 2 . 2 . 2 . 
2 2 . 2 . 2 . 2 2 . 2 . 2 . 2 . 
2 2 . 2 2 2 2 2 . . 2 . 2 . 2 . 
2 . . . . . . . 2 2 2 2 2 . 2 . 
2 . 2 2 2 2 2 . . . . . . . 2 . 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.stairEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

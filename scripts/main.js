import { ItemStack, system, world } from "@minecraft/server";

const pickaxes = {
    "minecraft:wooden_pickaxe": 1,
    "minecraft:stone_pickaxe": 2,
    "minecraft:gold_pickaxe": 1,
    "minecraft:iron_pickaxe": 3,
    "minecraft:diamond_pickaxe": 4,
    "minecraft:netherite_pickaxe": 4
}

world.beforeEvents.playerBreakBlock.subscribe(ev => {
    if (ev.block.type.id.includes("iron_ore") && pickaxes[ev.itemStack?.type.id] > 1) {
        ev.cancel = true;
        system.run(() => {
            world.getDimension(ev.player.dimension.id).getBlock(ev.block.location).setType("minecraft:air");
            const ore = new ItemStack("minecraft:iron_ingot", 1);
            world.getDimension(ev.player.dimension.id).spawnItem(ore, { x: ev.block.location.x + 0.5, y: ev.block.location.y + 0.5, z: ev.block.location.z + 0.5 });
            return;
        })
    }
    if (ev.block.type.id.includes("gold_ore") && pickaxes[ev.itemStack?.type.id] > 2) {
        ev.cancel = true;
        system.run(() => {
            world.getDimension(ev.player.dimension.id).getBlock(ev.block.location).setType("minecraft:air");
            const ore = new ItemStack("minecraft:gold_ingot", 1);
            world.getDimension(ev.player.dimension.id).spawnItem(ore, { x: ev.block.location.x + 0.5, y: ev.block.location.y + 0.5, z: ev.block.location.z + 0.5 });
            return;
        })
    }
    if (ev.block.type.id.includes("copper_ore") && pickaxes[ev.itemStack?.type.id] > 1) {
        ev.cancel = true;
        system.run(() => {
            world.getDimension(ev.player.dimension.id).getBlock(ev.block.location).setType("minecraft:air");
            const ore = new ItemStack("minecraft:copper_ingot", 1);
            world.getDimension(ev.player.dimension.id).spawnItem(ore, { x: ev.block.location.x + 0.5, y: ev.block.location.y + 0.5, z: ev.block.location.z + 0.5 });
            return;
        })
    }
})
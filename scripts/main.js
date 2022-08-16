Events.on(WorldLoadEvent, event => {
    if(Vars.mobile) {
        Timer.schedule(() => {
            var core = Vars.player.bestCore();
            if(core != null){
                Vars.player.set(core);
                Core.camera.position.set(core);
                Vars.player.sendMessage("Set camera position to your best core");
            }
        }, 1);
    }
});
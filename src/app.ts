import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, PointLight } from "@babylonjs/core";

class App {
    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.position = "absolute";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        var engine = new Engine(canvas, true);
        var battlefield = new Scene(engine);
        var lobby = new Scene(engine);
        var home = new Scene(engine);

        var battlelight: HemisphericLight = new HemisphericLight("light", new Vector3(1, 1, 0), battlefield);
        var lobbylight: PointLight = new PointLight("light", new Vector3(0, 3, 0), lobby);
        var homelight: PointLight = new PointLight("light", new Vector3(0, 3, 0), home);

        // run the main render loop
        engine.runRenderLoop(() => {
            battlefield.render();
        });
    }
}
new App();
"use client";

import { fabric } from "fabric";
import React, { useEffect } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import "@/utils/fabric-utils";
import { Resources } from "./Resources";
import { ElementsPanel } from "./panels/ElementsPanel";
import { TimeLine } from "./TimeLine";

export const Editor = observer(() => {
  
  const store = React.useContext(StoreContext);

  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      height: 500,
      width: 800,
      backgroundColor: "#ededed",
    });
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "#00a0f5";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.cornerStrokeColor = "#0063d8";
    fabric.Object.prototype.cornerSize = 10;
    // canvas mouse down without target should deselect active object
    canvas.on("mouse:down", function (e) {
      if (!e.target) {
        store.setSelectedElement(null);
      }
    });

    store.setCanvas(canvas);
    fabric.util.requestAnimFrame(function render() {
      canvas.renderAll();
      fabric.util.requestAnimFrame(render);
    });
  }, []);
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col overflow-auto w-[200px]">
        <Resources />
      </div>
      <div className="w-[800px] mx-5 mt-2 canvasTimeline">
        <canvas id="canvas" className="h-[500px] w-[800px]" />
        <div className="relative px-[10px] py-[4px] timeline">
        <TimeLine />
        </div>
      </div> 
      <div className="flex flex-col w-[200px]">
        <ElementsPanel />
      </div>
    </div>
  );
});

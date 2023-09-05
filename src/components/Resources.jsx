"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { VideoResourcesPanel } from "./panels/VideoResourcesPanel";

export const Resources = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedMenuOption = store.selectedMenuOption;
  return (
    <>
      {selectedMenuOption === "Video" ? <VideoResourcesPanel /> : null}
    </>
  );
});

import { Tab } from "bootstrap";
import { useEffect, useRef } from "react";
import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
  ScrollTopComponent,
  StickyComponent,
  SwapperComponent,
  ToggleComponent,
} from "../assets/ts/components";
import { ThemeModeComponent } from "../assets/ts/layout";
import { useLayout } from "./core";

export function MasterInit() {
  const { config } = useLayout();
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!initialized.current) {
      initialized.current = true;

      ThemeModeComponent.init();
      setTimeout(() => {
        ToggleComponent.bootstrap();
        ScrollTopComponent.bootstrap();
        DrawerComponent.bootstrap();
        StickyComponent.bootstrap();
        MenuComponent.bootstrap();
        ScrollComponent.bootstrap();
        SwapperComponent.bootstrap();

        document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tab) => {
          Tab.getOrCreateInstance(tab);
        });
      }, 500);
    }
  }, [config, initialized]);

  return <></>;
}

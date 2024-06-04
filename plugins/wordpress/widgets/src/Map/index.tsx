import { Brizy } from "@brizy/core";
import React, { CSSProperties, ReactElement } from "react";
import "./index.css";

interface ControlProps {
  address: string;
  zoom: number;
  style?: CSSProperties;
}

const Control = (props: ControlProps): ReactElement => {
  const { address, zoom = 13, style } = props;
  const URL = "https://www.google.com/maps/embed/v1/place";
  const KEY = "AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw";
  const iframeSrc = `${URL}?key=${KEY}&q=${address}&zoom=${zoom}`;

  return (
    <div className="mapThirdComponent" style={style}>
      <iframe src={iframeSrc} title="map" />
    </div>
  );
};

interface Props {
  address: string;
  zoom: number;
  width: number;
  widthSuffix: "px" | "%";
}

const Editor = (props: Props): ReactElement => {
  const { address, zoom, width, widthSuffix } = props;
  return <Control address={address} zoom={zoom} style={{ pointerEvents: "none", width: `${width}${widthSuffix}` }} />;
};

const View = (props: Props): ReactElement => {
  const { address, zoom, width, widthSuffix } = props;
  return <Control address={address} zoom={zoom} style={{ width: `${width}${widthSuffix}` }} />;
};

const Map = { Editor, View };

export default Map;

Brizy.registerComponent({
  id: "Brizy.ThirdParty.Map",
  component: {
    editor: Editor,
    view: View,
  },
  title: "Map",
  category: "custom",
  options: () => {
    return [
      {
        selector: ".mapThirdComponent",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-pin",
              title: "Map",
            },
            devices: "desktop",
            position: 90,
            options: [
              {
                id: "tabsCurrentElement",
                type: "tabs",
                tabs: [
                  {
                    id: "tabCurrentElement",
                    label: "Map",
                    options: [
                      {
                        id: "address",
                        label: "Address",
                        type: "inputText",
                        placeholder: "Enter address",
                        default: {
                          value: "Chisinau",
                        },
                      },
                      {
                        id: "width",
                        label: "Width",
                        type: "slider",
                        config: {
                          min: 0,
                          max: 100,
                          units: [
                            { title: "px", value: "px" },
                            { title: "%", value: "%" },
                          ],
                        },
                        default: {
                          value: 100,
                          suffix: "%",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  },
});

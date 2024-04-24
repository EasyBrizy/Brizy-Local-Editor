import { Brizy } from "@brizy/core";

export const mapTestComponent = (props: any): JSX.Element => {
  const URL = "https://www.google.com/maps/embed/v1/place";
  const KEY = "AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw";

  console.log("MapTest PROPS:", props);
  const { address, zoom } = props;

  const iframeSrc = `${URL}?key=${KEY}&q=${address}&zoom=${zoom}`;

  return (
    <div className="mapThirdComponent" style={{ pointerEvents: "none" }}>
      <iframe className="" src={iframeSrc} title="map" />
    </div>
  );
};

Brizy.registerComponent(mapTestComponent, {
  id: "myComp",
  title: "my componentTitle",
  category: "custom",
  options: (props) => {
    console.log("props", props);
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
                        id: "zoom",
                        label: "Zoom",
                        type: "slider",
                        config: {
                          min: 1,
                          max: 21,
                        },
                        default: {
                          value: 9,
                          suffix: "inch",
                        },
                      },
                      {
                        id: "testBorder",
                        label: "Border",
                        type: "border",
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

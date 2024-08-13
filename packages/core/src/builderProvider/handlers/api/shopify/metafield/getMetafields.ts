export const getShopifyMetafields = async (sourceType: string) => {
  return [
    {
      key: "metafields.custom.url",
      name: "URL",
    },
    {
      key: "metafields.custom.date",
      name: "Date",
    },
    {
      key: "metafields.custom.number",
      name: "Number",
    },
    {
      key: "metafields.custom.metafield1",
      name: "Metafield1",
    },
    {
      key: "metafields.shopify.ball-material",
      name: "Ball material",
    },
    {
      key: "metafields.shopify.age-group",
      name: "Age group",
    },
    {
      key: "metafields.shopify.ball-size",
      name: "Ball size",
    },
  ];
};

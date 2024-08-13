export type PlaceholderName = "placeholder";

export interface DCPlaceholderEndObj {
  name: PlaceholderName;
  content: string;
}

export interface DCPlaceholderStartObj {
  name: PlaceholderName;
  content: string;
  attrStr?: string;
  attr?: {
    entityId?: string;
    entityType?: string;

    // For image placeholders
    cH?: string;
    cW?: string;
  };
}

export type DCPlaceholderObj = DCPlaceholderStartObj | DCPlaceholderEndObj;

export interface Reference {
  collectionId: string;
  collectionType: string;
}

export enum PlaceholderType {
  Price = "{{price}}",
  CompareAtPrice = "{{compareAtPrice}}",
  Title = "{{brizy_dc_post_title}}",
  Description = "{{brizy_dc_post_content}}",
  Vendor = "{{brizy_dc_collection_item_field}}",
  VariantOptions = "{{variant_options}}",
  VariantTitle = "{{ variantTitle }}",
  VariantOptionValues = "{{ variant_option_values }}",
  VariantOptionTitle = "{{variantOptionTitle}}",
  FeaturedImageOriginal = '{{brizy_dc_collection_item_field size="original"}}',
  FeaturedImageCustom = '{{brizy_dc_collection_item_field size="custom"}}',
  Metafield = "{{metafield}}",
}

import { AlphaButton } from "@brizy/builder-ui/lib/components/AlphaButton";
import { ThemeIconEditor, ThemeIconPreview } from "@brizy/core";
import { Props as BaseProps } from "./types";

type Props = BaseProps & {
  ThemeIcon: typeof ThemeIconEditor | typeof ThemeIconPreview;
};

export const AddToCart = (props: Props) => {
  const { iconType, iconName, itemId, title, ThemeIcon } = props;

  const cartIcon = <ThemeIcon name={iconName} type={iconType} />;

  const productId = !itemId || itemId === "auto" ? "{{ brizy_dc_collection_item_field }}" : itemId;

  return (
    <div data-product-id={productId} className="add-to-cart-third-party-wrapper">
      <AlphaButton className="add-to-cart-third-party" icon={cartIcon}>
        {title}
        <ThemeIcon name="circle-02" type="glyph" className="brz-icon-spinner brz-hidden" />
      </AlphaButton>
    </div>
  );
};

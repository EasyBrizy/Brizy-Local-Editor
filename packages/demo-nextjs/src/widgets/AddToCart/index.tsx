import { AlphaButton } from "@brizy/builder-ui/lib/components/AlphaButton";
import { Brizy as BrizyCore } from "@brizy/core";
import { useMemo } from "react";
import "./index.scss";
import { getToolbar } from "./toolbar";
import { Props } from "./types";
import { getProductId } from "./utils";

export const AddToCart = (props: Props) => {
  const { iconType, iconName, itemId, title } = props;

  const productId = useMemo(() => {
    const config = Brizy?.config?.getAll();
    return config ? getProductId(config, itemId) : "";
  }, [itemId]);

  return (
    <div data-product-id={productId} className="add-to-cart-third-party-wrapper">
      <AlphaButton className="add-to-cart-third-party" icon={<span>Icon</span>}>
        {title}
        <svg className="brz-icon-svg align-[initial] brz-icon-spinner brz-hidden">
          <use href="/api/icons/glyph/circle-02.svg#nc_icon"></use>
        </svg>
      </AlphaButton>
    </div>
  );
};

BrizyCore.registerComponent({
  id: "Brizy.ThirdParty.AddToCart",
  component: {
    editor: AddToCart,
    view: AddToCart,
  },
  title: "Add to cart",
  category: "Ecommerce",
  options: getToolbar,
});

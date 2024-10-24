import { Props as CommonProps } from "@/widgets/Cart/types";
import { AlphaButton } from "@brizy/builder-ui/lib/components/AlphaButton";
import { AlphaDrawerHtml } from "@brizy/builder-ui/lib/components/AlphaDrawer/index.html";
import { ThemeIconEditor, ThemeIconPreview } from "@brizy/core";
import classNames from "classnames";
import { FC, ReactElement, useEffect, useRef } from "react";
import { Badge } from "./Badge";
import { Close } from "./assets/icons/Close";

const Z_INDEX = 1070;

type Props = Omit<CommonProps, "openSidebar"> & {
  isOpen: boolean;
  cartElement: ReactElement;
  ThemeIcon: typeof ThemeIconEditor | typeof ThemeIconPreview;
  className?: string;
};

export const Cart: FC<Props> = ({
  isOpen,
  cartHeaderTitle,
  sidebarPosition,
  sidebarWidth,
  sidebarWidthSuffix,
  showCloseBtn,
  items,
  cartElement,
  iconName,
  iconType,
  ThemeIcon,
  className,
}) => {
  const width = `${sidebarWidth}${sidebarWidthSuffix}`;
  const cartIcon = <ThemeIcon name={iconName} type={iconType} />;
  const _className = classNames("third-party-cart", className);

  return (
    <div className={_className}>
      <Badge count={items.length} icon={cartIcon} />
      {
        // @ts-expect-error: BuilderUI is still in React 17, where `children` is automatically added by React.
        // In this project, we are using React 18, which does not automatically infer `children` as a prop.
        <AlphaDrawerHtml
          isOpen={isOpen}
          title={cartHeaderTitle}
          closeIcon={false}
          extra={showCloseBtn === "on" && <AlphaButton icon={<Close />} />}
          zIndex={Z_INDEX}
          width={width}
          showMask={false}
          placement={sidebarPosition}
        >
          {cartElement}
        </AlphaDrawerHtml>
      }
    </div>
  );
};

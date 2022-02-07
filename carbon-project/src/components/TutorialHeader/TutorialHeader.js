import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
} from "carbon-components-react";
import {
  ShoppingCart32,
  Notification20,
  ShoppingCatalog32,
} from "@carbon/icons-react";
import { Link } from "react-router-dom";

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="IBM">
          Shopping
        </HeaderName>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        ></SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Shoppping Catalog">
            <ShoppingCatalog32 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Shopping Cart">
            <ShoppingCart32 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Notifications">
            <Notification20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;

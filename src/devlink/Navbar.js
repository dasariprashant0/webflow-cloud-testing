"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

export function Navbar({
  as: _Component = _Builtin.NavbarWrapper,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    light: "w-variant-a95b0928-cf0a-fe57-9d27-cde3339b555d",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "navbar", _activeStyleVariant)}
      tag="div"
      config={{
        animation: "default",
        collapse: "none",
        docHeight: true,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: true,
      }}
    >
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "navbar-container", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "navbar-home_button",
            _activeStyleVariant
          )}
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Prashant"}
        </_Builtin.Link>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "navbar-menu", _activeStyleVariant)}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "button", _activeStyleVariant)}
            options={{
              href: "#",
            }}
          >
            {"Projects"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "button", _activeStyleVariant)}
            options={{
              href: "#",
            }}
          >
            {"About"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "button", _activeStyleVariant)}
            options={{
              href: "#",
            }}
          >
            {"Contact"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}

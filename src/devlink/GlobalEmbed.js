"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GlobalEmbed({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component value="%3Cstyle%3E%0A%0A%09%3Aroot%7B%0A%20%20%09--beige%3A%20%23ECEAE5%3B%0A%20%20%20%20--black%3A%20%230E0E0E%3B%0A%20%20%7D%0A%20%20%0A%20%20%3A%3Aselection%7B%0A%20%20%09background%3A%20var(--black)%3B%0A%20%20%20%20color%3A%20var(--beige)%3B%0A%20%20%7D%0A%20%20%0A%20%20.section.is--black%20%3A%3Aselection%7B%0A%20%20%09background%3A%20var(--beige)%3B%0A%20%20%20%20color%3A%20var(--black)%3B%0A%20%20%7D%0A%0A%09a%7B%0A%20%20%09text-decoration%3A%20none%3B%0A%20%20%20%20color%3A%20inherit%3B%0A%20%20%7D%0A%20%20%0A%20%20body%20%7B%0A%20%20%20%20-webkit-font-smoothing%3A%20antialiased%3B%0A%20%20%20%20-moz-osx-font-smoothing%3A%20grayscale%3B%0A%20%09%09font-size%3A%201.1111111111111112vw%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Max%20Font%20Size%20*%2F%0A%20%20%40media%20screen%20and%20(min-width%3A1920px)%20%7B%0A%20%20%20body%20%7Bfont-size%3A%201.3333333333333333rem%3B%7D%0A%20%20%7D%0A%0A%0A%3C%2Fstyle%3E" />
  );
}

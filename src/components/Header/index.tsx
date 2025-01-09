import { isMobile } from "react-device-detect";

import { HeaderDesktop } from "./HeaderDesktop";

import { HeaderMobile } from "./HeaderMobile";

export function Header() {
  return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
}

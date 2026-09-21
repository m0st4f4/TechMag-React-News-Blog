import { NavLink } from "react-router";

import { useTranslation } from "react-i18next";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils.ts";

import type { TopNavigation } from "@/types/navigation.types.ts";

type Props = {
  menuItems: TopNavigation[];
};
export const Navbar = ({ menuItems }: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <NavigationMenu>
      <NavigationMenuList dir={i18n.dir()} className="gap-2">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavLink
              to={item.href}
              className={({ isActive }) => {
                return cn(
                  navigationMenuTriggerStyle(),
                  isActive ? "text-accent bg-secondary" : ""
                );
              }}
            >
              {t(item.titleKey)}
            </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

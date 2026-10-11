import MingcuteGithub2Fill from "@/icons/MingcuteGithub2Fill.tsx";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill.tsx";

import type {
  FooterNavigationType,
  SidebarNavigationType,
  SocialNavigationType,
  TopNavigation,
} from "@/types/navigation.types.ts";

export const topNavigation: TopNavigation[] = [
  {
    titleKey: "nav.top.home",
    href: "/",
  },
  {
    titleKey: "nav.top.category",
    href: "/category",
  },
  {
    titleKey: "nav.top.aboutUs",
    href: "/aboutus",
  },
  {
    titleKey: "nav.top.contactUs",
    href: "/contactus",
  },
];

export const socialNavigation: SocialNavigationType[] = [
  {
    titleKey: "nav.social.linkedin",
    href: "https://www.linkedin.com/in/seyyed-mostafa-hosseini/",
    icon: MingcuteLinkedinFill,
  },
  {
    titleKey: "nav.social.github",
    href: "https://github.com/m0st4f4",
    icon: MingcuteGithub2Fill,
  },
];

export const FooterNavigation: FooterNavigationType[] = [
  {
    groupTitleKey: "nav.footer.technology",
    items: [
      {
        titleKey: "nav.footer.ai",
        href: "/category/2",
      },
      {
        titleKey: "nav.footer.programming",
        href: "/category/1",
      },
      {
        titleKey: "nav.footer.game",
        href: "/category/8",
      },
      {
        titleKey: "nav.footer.security",
        href: "/category/5",
      },
    ],
  },
  {
    groupTitleKey: "nav.footer.tutorial",
    items: [
      {
        titleKey: "nav.footer.ai",
        href: "/category/2",
      },
      {
        titleKey: "nav.footer.programming",
        href: "/category/1",
      },
    ],
  },
  {
    groupTitleKey: "nav.footer.usefulLinks",
    items: [
      {
        titleKey: "nav.footer.home",
        href: "/",
      },
      {
        titleKey: "nav.footer.aboutUs",
        href: "/aboutUs",
      },
      {
        titleKey: "nav.footer.contactUs",
        href: "/contactUs",
      },
    ],
  },
];

export const ProfileSidebarNavigation: SidebarNavigationType[] = [
  {
    titleKey: "sidebar.profile.userInfo",
    href: "/profile",
  },
];

import { svgObj } from "./svg";

const routes = [
  {
    path: "/",
    title: "Home",
    svgPath: svgObj.home.svgChildren,
    interactive: false,
  },
  {
    path: "/",
    title: "Search",
    svgPath: svgObj.search.svgChildren,
    interactive: true,
  },
  {
    path: "explore",
    title: "Explore",
    svgPath: svgObj.explore.svgChildren,
    interactive: false,
  },
  {
    path: "reels",
    title: "Reels",
    svgPath: svgObj.reel.svgChildren,
    interactive: false,
  },
  {
    path: "direct/inbox",
    title: "Inbox",
    svgPath: svgObj.inbox.svgChildren,
    interactive: false,
  },
  {
    path: "/",
    title: "Notifications",
    svgPath: svgObj.notification.svgChildren,
    interactive: true,
  },
  {
    path: "/",
    title: "Create",
    svgPath: svgObj.create.svgChildren,
    interactive: false,
  },
  {
    path: "profile",
    title: "Profile",
    svgPath: svgObj.home.svgChildren,
    interactive: false,
  },
];

export default routes;

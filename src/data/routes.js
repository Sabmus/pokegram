import { svgObj } from "./svg";

const routes = [
  {
    path: "/",
    title: "Home",
    svgPath: svgObj.home.svgChildren,
  },
  {
    path: "/",
    title: "Search",
    svgPath: svgObj.search.svgChildren,
  },
  {
    path: "explore",
    title: "Explore",
    svgPath: svgObj.explore.svgChildren,
  },
  {
    path: "reels",
    title: "Reels",
    svgPath: svgObj.reel.svgChildren,
  },
  {
    path: "direct/inbox",
    title: "Inbox",
    svgPath: svgObj.inbox.svgChildren,
  },
  {
    path: "/",
    title: "Notifications",
    svgPath: svgObj.notification.svgChildren,
    svgPathClicked: "",
  },
  {
    path: "/",
    title: "Create",
    svgPath: svgObj.create.svgChildren,
  },
  {
    path: "profile",
    title: "Profile",
    svgPath: svgObj.home.svgChildren,
  },
];

export default routes;

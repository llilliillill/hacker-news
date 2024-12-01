import Routing from "./index.vue";

export const routes = [
  { 
    path: "/", 
    component: () => import("./home"),
    name: "Home", 
  },
  { 
    path: "/news/:id", 
    component: () => import("./news"),
    name: "News", 
  }
];

export { Routing };
import { createApp } from "vue";
import { router, store } from "./providers";
import App from "./index.vue";
import ui from "../shared/ui"

export const app = createApp(App).use(router).use(store);

ui.forEach((ui: any) => {
  app.component(ui.name, ui)
})
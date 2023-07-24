import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

// import { aliases, fa } from 'vuetify/iconsets/fa'
// export default createVuetify({
//   icons: {
//     defaultSet: "mdi", 'fa',
//     aliases,
//     sets: {
//         fa,
//       },// This is already the default value - only for display purposes
//   },
// });
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");

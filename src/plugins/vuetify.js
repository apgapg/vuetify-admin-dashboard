import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import "line-awesome/dist/font-awesome-line-awesome/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "las" // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue,
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c"
      }
    }
  }
});

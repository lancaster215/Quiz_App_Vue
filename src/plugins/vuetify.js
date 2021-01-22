import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        // themes: {
        //     light: {
        //         primary: colors.blue.darken-3,
        //         secondary: colors.green.darken-3,
        //         error: colors.red.darken-3,
        //     }
        // }
        // options: { customProperties: true },
    },
});

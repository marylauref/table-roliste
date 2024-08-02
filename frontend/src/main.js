import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "vuetify/styles"
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'

import colors from 'vuetify/util/colors'

import App from './App.vue'
import router from './router/routes'

import genericIcon from "./components/genericIcon.vue"

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "fa",
        aliases,
        sets: {
            fa,
        },
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: colors.teal.base,
                    secondary: colors.blueGrey.base,
                }
            }
        }
    }
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.component("genericIcon", genericIcon);

app.mount('#app')

export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'codeMat Landing Page',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
            },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    loading: {
        color: 'green',
        height: '5px'
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    pwa: {
        workbox: {
            offlineStrategy: 'StaleWhileRevalidate',
            runtimeCaching: [{
                    urlPattern: 'https://fonts.googleapis.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
                    strategyPlugins: [{
                        use: 'Expiration',
                        config: {
                            maxEntries: 10,
                            maxAgeSeconds: 300
                        }
                    }]
                },
                {
                    urlPattern: 'https://fonts.gstatic.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
                    strategyPlugins: [{
                        use: 'Expiration',
                        config: {
                            maxEntries: 10,
                            maxAgeSeconds: 300
                        }
                    }]
                },
                {
                    urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
                    strategyPlugins: [{
                        use: 'Expiration',
                        config: {
                            maxEntries: 10,
                            maxAgeSeconds: 300
                        }
                    }]
                }
            ]
        },
        icon: {
            iconSrc: './static/icon.png'
        },
        meta: {
            title: 'CodeMat Landing Page',
            author: 'CodeMat',
        },
        manifest: {
            name: 'CodeMat',
            short_name: 'CodeMat',
            lang: 'en',
            description: 'CodeMat Landing Page',
            start_url: '/',
            display: 'standalone',
            orientation: 'portrait-primary',
            theme_color: '#F1F3F1',
            background_color: '#000',
            orientation: 'portrait',
            icons: ['./static/icon.png'],
            useWebmanifestExtension: false
        },

    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
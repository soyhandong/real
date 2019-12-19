<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app="app" clipped="clipped">
            
            <v-list dense="dense">

                <v-list-item @click.stop="left = !left">
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Calculator
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            subtext
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item link="link">
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Calculator</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link="link">
                    <v-list-item-action>
                        <v-icon>mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app="app" clipped-left="clipped-left">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Calculator</v-toolbar-title>
            <v-spacer/>
            <v-btn icon="icon">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-container class="fill-height" fluid="fluid">
                <v-row align="center" justify="center"></v-row>
            </v-container>
        </v-content>

        <v-footer app="app">
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String
        },
        data: () => ({drawer: null}),
        created() {
            this.$vuetify.theme.dark = true
        }
    }
</script>
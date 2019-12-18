<template>
    <v-app id="inspire">
        <v-app-bar
            app="app"
            clipped-right="clipped-right"
            color="blue-grey"
            dark="dark">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Calculator</v-toolbar-title>
            <v-spacer/>
            <v-btn icon="icon">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app="app">
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

                <v-list-item v-for="item in items" :key="item.title" link="link">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

        <v-content>
            <v-container class="fill-height" fluid="fluid">
                <v-row justify="center">
                    <v-col v-for="n in 10" :key="n" cols="auto">
                        <v-card :elevation="n - 1" height="50" width="50">
                            <v-row class="fill-height" align="center" justify="center" v-text="n - 1"></v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-footer app="app" color="blue-grey" class="white--text">
            <span>DDhouse</span>
            <v-spacer/>
            <span>2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String
        },
        data: () => ({
            drawer: null,
            drawerRight: null,
            right: false,
            left: false,
            items: [
                {
                    title: 'General Calculator',
                    icon: 'mdi-view-dashboard'
                }, {
                    title: 'Scientific Calculator',
                    icon: 'mdi-image'
                }, {
                    title: 'Others',
                    icon: 'mdi-help-box'
                }
            ]
        })
    }
</script>
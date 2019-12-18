<template>
    <v-app>
        <v-app-bar app="app" color="primary" dark="dark"></v-app-bar>

        <v-content>
            <HelloWorld/>
        </v-content>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld';
    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data: () => ({
            //
        })
    };
</script>
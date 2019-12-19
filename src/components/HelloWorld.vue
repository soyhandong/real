<template>
    <v-app id="inspire">
        <v-app-bar
            app="app"
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
            <v-container fluid>
                <v-layout column="column" row="row">
                    <div class="calculator">
                        <div class="display">{{current || '0'}}</div>
                        
                        <v-btn
                            @click="clear"
                            class="btn operator"
                            tile="tile"
                            color="indigo"
                            dark="dark">C</v-btn>

                        <v-btn @click="sign" class="btn" tile="tile" color="indigo" dark="dark">+/-</v-btn>

                        <v-btn
                            @click="percent"
                            class="btn operator"
                            tile="tile"
                            color="indigo"
                            dark="dark">%</v-btn>

                        <v-btn
                            @click="append('/')"
                            class="btn operator"
                            tile="tile"
                            color="indigo"
                            dark="dark">÷</v-btn>

                        <v-btn @click="append('7')" class="btn" tile="tile" color="indigo" dark="dark">7</v-btn>

                        <v-btn @click="append('8')" class="btn" tile="tile" color="indigo" dark="dark">8</v-btn>

                        <v-btn @click="append('9')" class="btn" tile="tile" color="indigo" dark="dark">9</v-btn>

                        <v-btn
                            @click="append('*')"
                            class="btn operator"
                            tile="tile"
                            color="indigo"
                            dark="dark">x</v-btn>

                        <v-btn @click="append('4')" class="btn" tile="tile" color="indigo" dark="dark">4</v-btn>

                        <v-btn @click="append('5')" class="btn" tile="tile" color="indigo" dark="dark">5</v-btn>

                        <v-btn @click="append('6')" class="btn" tile="tile" color="indigo" dark="dark">6</v-btn>

                        <v-btn
                            @click="append('-')"
                            class="btn operator"
                            tile="tile"
                            color="indigo"
                            dark="dark">-</v-btn>

                        <v-btn @click="append('1')" class="btn" tile="tile" color="indigo" dark="dark">1</v-btn>

                        <v-btn @click="append('2')" class="btn" tile="tile" color="indigo" dark="dark">2</v-btn>

                        <v-btn @click="append('3')" class="btn" tile="tile" color="indigo" dark="dark">3</v-btn>

                        <v-btn
                            @click="append('+')"
                            class="btn operator"
                            tile="tile"
                            color="indigo"
                            dark="dark">+</v-btn>

                        <v-btn
                            @click="append('0')"
                            class="btn zero"
                            tile="tile"
                            color="indigo"
                            dark="dark">0</v-btn>

                        <v-btn @click="dot" class="btn" tile="tile" color="indigo" dark="dark">.</v-btn>

                        <v-btn
                            @click="equal"
                            class="btn operator"
                            tile="tile"
                            color="indigo"
                            dark="dark">=</v-btn>

                    </div>

                </v-layout>
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
            ],
            previous: null,
            current: '',
            operator: null,
            operatorClicked: false
        }),
        methods: {
            clear() {
                this.current = '';
            },
            sign() {
                this.current = this
                    .current
                    .charAt(0) === '-'
                        ? this
                            .current
                            .slice(1)
                        : `-${this.current}`;
            },
            append(number) {
                if (this.operatorClicked) {
                    this.current = '';
                    this.operatorClicked = false;
                }
                this.current = `${this.current}${number}`;
            },
            dot() {
                if (this.current.indexOf('.') === -1) {
                    this.append('.');
                }
            },
            setPrevious() {
                this.previous = this.current;
            },
            percent() {
                this.current = `${parseFloat(this.current) / 100}`;
            },
            equal() {
                this.current = eval(this.current);
                this.previous = null;
            }
        }
    }
</script>

<style scoped="scoped">
    .calculator {
        font-size: 20px;
        display: grid;

    }
    .display {
        grid-column: 1 / 5;
        height: 300px;
        background-color: #333;
        color: white;
    }

    .zero {
        grid-column: 1 / 3;
    }
    .btn {
        border: aliceblue;
    }
    .operator {}
</style>
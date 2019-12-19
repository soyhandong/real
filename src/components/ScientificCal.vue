<template>
    <v-app id="inspire">
        <v-app-bar
            app="app"
            clipped-right="cl3ipped-right"
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
            <v-container>
                <v-layout column="column" row="row">
                    <v-flex>
                        <div class="calculator">
                            <div class="display">{{current || '0'}}</div>
                            <div @click="clear" class="btn operator">
                                <v-btn tile="tile" color="indigo" dark="dark">C</v-btn>
                            </div>
                            <div @click="rad" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">rad</v-btn>
                            </div>
                            <div @click="append('Math.sqrt(')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">√</v-btn>
                            </div>
                            <div @click="append('(')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">(</v-btn>
                            </div>
                            <div @click="append(')')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">)</v-btn>
                            </div>
                            <div @click="percent" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">%</v-btn>
                            </div>
                            <div @click="append('/')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">÷</v-btn>
                            </div>
                            <div @click="append('Math.sin(')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">sin</v-btn>
                            </div>
                            <div @click="append('Math.cos(')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">cos</v-btn>
                            </div>
                            <div @click="append('Math.tan(')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">tan</v-btn>
                            </div>
                            <div @click="append('7')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">7</v-btn>
                            </div>
                            <div @click="append('8')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">8</v-btn>
                            </div>
                            <div @click="append('9')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">9</v-btn>
                            </div>
                            <div @click="append('*')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">x</v-btn>
                            </div>
                            <div @click="append('Math.log(')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">ln</v-btn>
                            </div>
                            <div @click="append('Math.log10(')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">log</v-btn>
                            </div>
                            <div @click="xdivide" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">1/x</v-btn>
                            </div>
                            <div @click="append('4')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">4</v-btn>
                            </div>
                            <div @click="append('5')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">5</v-btn>
                            </div>
                            <div @click="append('6')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">6</v-btn>
                            </div>
                            <div @click="append('-')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">-</v-btn>
                            </div>
                            <div @click="append('Math.exp(')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">e^x</v-btn>
                            </div>
                            <div @click="xtpow" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">x^2</v-btn>
                            </div>
                            <div @click="xypow" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">x^y</v-btn>
                            </div>
                            <div @click="append('1')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">1</v-btn>
                            </div>
                            <div @click="append('2')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">2</v-btn>
                            </div>
                            <div @click="append('3')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">3</v-btn>
                            </div>
                            <div @click="append('+')" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">+</v-btn>
                            </div>
                            <div @click="abs" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">|x|</v-btn>
                            </div>
                            <div @click="piyo" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">PI</v-btn>
                            </div>
                            <div @click="juste" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">e</v-btn>
                            </div>
                            <div @click="sign" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">+/-</v-btn>
                            </div>
                            <div @click="append('0')" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">0</v-btn>
                            </div>
                            <div @click="dot" class="btn">
                                <v-btn  tile="tile" color="indigo" dark="dark">.</v-btn>
                            </div>
                            <div @click="equal" class="btn operator">
                                <v-btn  tile="tile" color="indigo" dark="dark">=</v-btn>
                            </div>
                        </div>
                    </v-flex>
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
            },
            pequal() {
                this.current = `${this.operator(
                    parseFloat(this.current),
                    parseFloat(this.previous)
                )}`;
            },
            piyo() {
                this.operator = (a) => Math.PI * a;
                this.setPrevious();
                this.equal();
            },
            rad() {
                this.operator = (a) => a * 180 / Math.PI;
                this.setPrevious();
                this.pequal();
            },
            xdivide() {
                this.operator = (a) => 1 / a;
                this.setPrevious();
                this.pequal();
            },
            xtpow() {
                this.operator = (a) => Math.pow(a, 2);
                this.setPrevious();
                this.pequal();
            },
            xypow() {
                this.operator = (a, b) => Math.pow(b, a);
                this.setPrevious();
            },
            abs() {
                this.operator = (a) => Math.abs(a);
                this.setPrevious();
                this.pequal();
            },
            juste() {
                this.operator = (a) => a * Math.E;
                this.setPrevious();
                this.pequal();
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
        grid-column: 1 / 8;
           
        background-color: #333;
        color: white;
    }
    .btn {
        border:aliceblue;
    }
    .operator {
        
    }
</style>
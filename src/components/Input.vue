<template>
    <div id="input">
        <input class="box" v-model="loanAmount" placeholder="Insert loan amount"/>
        <button class="get" v-on:click="insert">GET</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import {host} from '@/main';
    import {bus} from '@/main';

    const badRequest = "Invalid loan amount, must be any 100 increment between 1000-15000 inclusive: ";
    const insufficientLenders = "Insufficient offers from lenders to satisfy the loan. Try a smaller loan amount.";

    export default {
        name: "Input",
        data () {
            return {
                loanAmount: ""
            }
        },
        methods: {
            insert () {
                axios.get(host + `calculator/loan_quote?loanAmount=${this.loanAmount}`)
                .then(res => {
                    let data = res.data;
                    bus.$emit('calculate', data, "");
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        bus.$emit('calculate', null, badRequest + this.loanAmount);
                    } else if (err.response.status === 404) {
                        bus.$emit('calculate', null, insufficientLenders);
                    } else {
                        console.log(err);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #input {
        display: block;
        text-align: center;
        margin: 50px;

        padding: 20px;
    }

    .box {
        border-radius: 5px;
        padding: 5px;
    }

    .get {
        border-radius: 5px;
        background-color: green;
        color: white;
        font-weight: bold;
        font-size: large;
    }

</style>

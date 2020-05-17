<template>
    <div id="loanQuote">
        <div id="message">{{message}}</div>
        <ul id="list">
            <li>Rate: {{rate}}</li>
            <li>Monthly Repayment: {{monthlyRepayment}}</li>
            <li>Total Repayment: {{totalRepayment}}</li>
        </ul>
    </div>
</template>

<script>
    import {bus} from '@/main';

    export default {
        name: "LoanQuote",
        data () {
            return {
                rate: '',
                monthlyRepayment: '',
                totalRepayment: '',
                message: ''
            }
        },
        created() {
            bus.$on('calculate', (lq, mess) => {
                if (lq != null) {
                    this.rate = lq.rate;
                    this.monthlyRepayment = lq.monthlyRepayment;
                    this.totalRepayment = lq.totalRepayment;
                } else {
                    this.rate = '';
                    this.monthlyRepayment = '';
                    this.totalRepayment = '';
                }
                this.message = mess;
            });
        }
    }
</script>

<style scoped>
    #loanQuote {
        display: block;
        border: 5px solid darkblue;
        border-radius: 10px;
        max-width: 100%;
        position: relative;
    }

    #message {
        display: block;
        margin: 40px;
        color: red;
        font-weight: bold;
        text-align: justify;
        text-decoration: underline red;
        max-width: 350px;
        position: relative;
    }

    #list {
        list-style: none;
        display: block;
        font-weight: bold;
        margin-left: 40px;
        margin-right: 40px;
        position: center;
    }
</style>

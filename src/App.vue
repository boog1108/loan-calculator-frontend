<template>
  <div id="app">
    <h1>LOAN CALCULATOR</h1>
    <Input/>
    <LoanQuote/>
  </div>
</template>

<script>


  import Input from "@/components/Input";
  import LoanQuote from "@/components/LoanQuote";

  export default {
    name: 'App',
    components: {
      LoanQuote,
      Input
    }
  }
</script>

<style>
  #app {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: Arial, serif;
  }

  h1 {
    font-size: xx-large;
    text-decoration: underline;
    text-align: center;
    margin: 30px;
    color: darkblue;
  }

</style>

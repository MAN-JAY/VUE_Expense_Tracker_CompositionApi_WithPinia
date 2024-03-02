<template>
     <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${{ income }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${{ expenses*-1 }}</p>
    </div>
  </div>
</template>

<script setup>
import { useTransactionStore} from '../stores/transactionStore'
import {computed} from 'vue'
const store = useTransactionStore() 

const {transactions} = store

const income = computed(() => {
  return transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});

const expenses = computed(() => {
  return transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});

</script>
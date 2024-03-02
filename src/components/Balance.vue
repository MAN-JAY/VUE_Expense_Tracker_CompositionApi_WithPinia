<template>
    <h4>Your Balance</h4>
    <h1 id="balance">${{ total }}</h1>
</template>

<script setup>
import { useTransactionStore} from '../stores/transactionStore'
import {computed} from 'vue'

const store = useTransactionStore()
const total = computed(() => {
  return store.transactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

</script>
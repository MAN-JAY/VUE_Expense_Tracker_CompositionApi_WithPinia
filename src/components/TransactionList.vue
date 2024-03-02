<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      v-bind:key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span
      ><button
        @click="handleTransactionDelete(transaction.id)"
        class="delete-btn"
      >
        x
      </button>
    </li>
  </ul>
</template>

<script setup>
import {useTransactionStore} from "../stores/transactionStore";

const store = useTransactionStore()
const {transactions, handleTransactionDelete} = store
</script>

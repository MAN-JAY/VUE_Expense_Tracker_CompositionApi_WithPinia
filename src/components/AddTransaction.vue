<template>
      <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" v-model="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="text" id="amount" v-model="amount"  placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
</template>

<script setup>
import {ref} from 'vue'
import {useTransactionStore} from "../stores/transactionStore";
import { useToast } from 'vue-toastification';

const store = useTransactionStore()
const {transactions, handleTransactionSubmitted} = store

const text = ref('')
const amount = ref('')
const toast = useToast()

const onSubmit = () => {
    if(!text.value || !amount.value){
        toast.error("Both field must be filled")
        return;
    }
    const transactionData = {text:text.value,amount:parseFloat(amount.value)}

    handleTransactionSubmitted(transactionData)

    amount.value=''
    text.value=''
}
</script>
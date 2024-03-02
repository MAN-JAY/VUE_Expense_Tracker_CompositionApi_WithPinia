import { defineStore } from "pinia";
import { ref,onMounted } from "vue";
import {useToast} from 'vue-toastification'


const toast = useToast()

export const useTransactionStore = defineStore("counter", () => {
  const transactions = ref([]);
  
  onMounted(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transaction"));
  
    if (savedTransactions) {
      transactions.value = savedTransactions;
    }
  });

  const handleTransactionDelete = (id) => {
    transactions.value = transactions.value.filter(
      (transaction) => transaction.id != id
    );
    savedTransactionToLocalStorage();
    toast.success("Transaction Deleted");
  };

  const savedTransactionToLocalStorage = () => {
    localStorage.setItem("transaction", JSON.stringify(transactions.value));
  };

  const handleTransactionSubmitted = (transactionsData) => {
    transactions.value.push({
      id: generateUniqueId(),
      text: transactionsData.text,
      amount: transactionsData.amount,
    });
    savedTransactionToLocalStorage();
    toast.success("Transaction added");
  };

  const generateUniqueId = () => {
    return Math.floor(Math.random() * 100000);
  };

  return { transactions, handleTransactionDelete, handleTransactionSubmitted };
});

// stores/inputStore.js
import { defineStore } from 'pinia';

export const useInputStore = defineStore('input', {
  state: () => ({
    message: '',
    originPage: '', // Store the page from which the message originated
  }),
  actions: {
    setMessage(newMessage, page) {
      this.message = newMessage;
      this.originPage = page; // Set the origin page
    },
    clearMessage() {
      this.message = '';
      this.originPage = '';
    },
  },
});

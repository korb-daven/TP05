<script>
import { useInputStore } from '@/stores/message';
import { useRouter } from 'vue-router';
export default {
    name: 'BodyComponent',
    props: ['page', 'section'],
    setup(props) {
      const inputStore = useInputStore(); // Access Pinia store for shared state

      const saveMessage = (newMessage, page) => {
        inputStore.setMessage(newMessage, page); // Save message with the current page as the origin
        alert("The message have been saved. Switch to other page to see!")
      };

      return {
        message: inputStore.message,
        originPage: inputStore.originPage,
        saveMessage,
      };
  },
}
</script>
<template>
  <div class="body">
    <div class="section">
      <div class="item">Menu</div>
      <div class="item">
        <RouterLink :to="{path: `/${page}/section1`}">Section 1</RouterLink>
      </div>
      
      <div class="item">
        <RouterLink :to="{path: `/${page}/section2`}">Section 2</RouterLink>
      </div>
      <div class="item">
        <RouterLink :to="{path: `/${page}/section3`}">Section 3</RouterLink>
      </div>
      <div class="item">
        <RouterLink :to="{path: `/${page}/section4`}">Section 4</RouterLink>
      </div>
    </div>
    <div v-if="section === 'none'" class="content">
      <p class="text">This is the {{ page }}</p>
      <br>
      <p v-if="message">
        <span v-if="originPage">==> The message from {{ originPage }} : {{ message }} !</span>
      </p>
    </div>
    <div v-if="section !== 'none'" class="content">
      <p class="text">This is the {{ page }}</p>
      <p>----------------------------------------</p>
      <p class="text">This is the {{ section }} of the {{ page }}</p>
      <br>
      <p v-if="message">
        <span v-if="originPage">==> The message from {{ originPage }} : {{ message }} !</span>
      </p>
    </div>
    <br>
     <!-- Input Section -->
     <div class="input-section">
      <input
        v-model="message"
        type="text"
        placeholder="Type your message here"
        class="input-box"
      />
      <button @click="saveMessage(message, page)" class="save-button">Save Message</button>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin-top: 2rem;
  display: flex;
  width: 100%;
  border-top: 1.5px solid #333940;
  
}

.section{
  margin-top: 25px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  
}

.content{
  width: 80%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item{
  border-bottom: 1.5px solid #333940;
  width: 100%;
  height: 50px;
  text-align: center;
  padding-top: 20px
}
.input-section {
  margin-top: 20px;
}
.input-box {
  margin-right: 10px;
  padding: 5px;
}
.save-button {
  padding: 5px 10px;
}
.saved-message {
  margin-top: 10px;
  font-style: italic;
  color: #555;
}

</style>

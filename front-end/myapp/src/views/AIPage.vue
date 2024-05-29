<template>
  <div>
  <button class="backbutton" >
    <img @click="backHome" class="arrow" src="/static/img/arrow.png">
  </button>
  <div class="chat-interface">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" class="message" :class="{'user': message.isUser, 'assistant': !message.isUser}">
        <img :src="message.isUser ? '/static/img/me.JPG' : '/static/img/robot.png'" class="avatar">
        <div class="message-content">
          {{ message.complete ? message.content : message.content + '...' }}
        </div>
      </div>

    </div>
    <div class="input-area">
      <textarea v-model="userInput" @keyup.enter="sendMessage" placeholder="请随便提问吧！"></textarea>
      <button class="sendbutton" @click="sendMessage">发送</button>
    </div>
  </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router/composables";

const router = useRouter()
const backHome = () =>{
  router.push({ name: 'HomePage' });
}

const messages = ref([
  { content: "这里是西藏文旅智能机器人，有什么我可以帮助你的吗？", isUser: false, complete:true }
]);

const userInput = ref('');
const API_URL = 'http://localhost:8000/v1/chat/completions';
const API_KEY = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcyNDY0ODE2NywiaWF0IjoxNzE2ODcyMTY3LCJqdGkiOiJjcGFtN3BwcDJrMTIycjZrZjZkZyIsInR5cCI6InJlZnJlc2giLCJzdWIiOiJjcGFtN3BwcDJrMTIycjZrZjZhZyIsInNwYWNlX2lkIjoiY3BhbTdwcHAyazEyMnI2a2Y2OWciLCJhYnN0cmFjdF91c2VyX2lkIjoiY3BhbTdwcHAyazEyMnI2a2Y2OTAifQ.gHumu0Ies3swxPI89v_gn7dFkcYfUKYUmCte9J38jdC-JxryYgxSTPPAWdrd1g_8FOkTKP347TEvKcr6CuORww';

function typeMessage(message) {
  let typedContent = '';
  let index = 0;
  const typingSpeed = 10;  // milliseconds between each character
  const fullContent = message.content;  // Store the full content temporarily
  message.content = '';  // Initialize message content as empty

  const typingInterval = setInterval(() => {
    typedContent += fullContent[index];
    index++;

    if (index === fullContent.length) {
      clearInterval(typingInterval);
      message.content = typedContent;  // Update the message content when complete
      message.complete = true;
      messages.value[messages.value.length - 1] = {...message};  // Trigger reactivity properly
    }
  }, typingSpeed);
}



async function sendMessage() {
  if (userInput.value.trim() !== '') {
    const userMessage = { content: userInput.value, isUser: true, complete: true };
    messages.value.push(userMessage);
    userInput.value = ''; // Clear input after sending

    const data = {
      model: "kimi",
      messages: [{ role: "user", content: userMessage.content }],
      use_search: true
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    };

    try {
      const result = await axios.post(API_URL, data, { headers });
      const aiResponse = result.data.choices[0].message.content;
      const aiMessage = { content: aiResponse, isUser: false, complete: false };
      messages.value.push(aiMessage);
      typeMessage(aiMessage); // Simulate typing effect
    } catch (error) {
      console.error('Error calling the API:', error);
      messages.value.push({ content: "Failed to get response from the API.", isUser: false, complete: true });
    }
  }

}
</script>

<style scoped>
.backbutton {
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 48px;
  aspect-ratio: 1;
  padding: 0;
  border-radius: 12px;
  border: 0;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.arrow{
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 48px;
  aspect-ratio: 1;
  padding: 0;
  border-radius: 12px;
  border: 0;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;

}
/* Styles as provided before */
.chat-interface {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 60vw;
  margin: auto;
  background: #fff;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

.messages {
  overflow-y: auto;
  flex-grow: 1;
  padding: 20px;
}

.user {
  //justify-content: flex-end;
  flex-direction: row-reverse; /* 头像在右 */
}

.assistant {
  justify-content: flex-start;
  flex-direction: row; /* 头像在左 */
}

.message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  padding: 5px;
}

.message-content {
  padding: 10px 15px;
  border-radius: 15px;
  background-color: #e0f7fa;
}

.input-area {
  display: flex;
  padding: 10px 20px;
  background: #f0f0f0;
}

textarea {
  flex: 1;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  resize: none;
}

.sendbutton {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

<template>
  <div class="guestbook">
    <h2 class="guestbook-title">축하 인사</h2>
    
    <form @submit.prevent="submitMessage" class="guestbook-form">
      <input 
        v-model="name" 
        type="text" 
        placeholder="이름" 
        required
        class="guestbook-input"
      >
      <textarea 
        v-model="message" 
        placeholder="축하 메시지를 남겨주세요" 
        required
        class="guestbook-textarea"
      ></textarea>
      <button type="submit" class="guestbook-submit">등록하기</button>
    </form>

    <div class="messages">
      <div v-for="msg in messages" :key="msg.id" class="message">
        <div class="message-header">
          <span class="message-name">{{ msg.name }}</span>
          <span class="message-date">{{ formatDate(msg.created_at) }}</span>
        </div>
        <p class="message-content">{{ msg.message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const supabase = createClient(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
)

const name = ref('')
const message = ref('')
const messages = ref([])

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('ko-KR')
}

const fetchMessages = async () => {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching messages:', error)
    return
  }
  
  messages.value = data
}

const submitMessage = async () => {
  const { error } = await supabase
    .from('guestbook')
    .insert([
      {
        name: name.value,
        message: message.value,
      }
    ])

  if (error) {
    console.error('Error submitting message:', error)
    return
  }

  name.value = ''
  message.value = ''
  await fetchMessages()
}

onMounted(() => {
  fetchMessages()
})
</script>

<style lang="scss" scoped src="@/assets/scss/guestbook.scss"></style> 
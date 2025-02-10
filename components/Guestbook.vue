<template>
  <div class="guestbook-container">
    <div class="guestbook">
      <h2 class="guestbook-title">소소한 마음 전달하기</h2>
      <div class="dropdown">
        <div class="detail_btn" @click="toggleDropdown(1)">
          <span>신랑측 계좌번호 보기</span>
          <span class="down_btn" :class="{ 'rotate': isOpen1 }"><i class="ri-arrow-down-s-fill"></i></span>
        </div>
        <div class="detail_content" :class="{ 'show': isOpen1 }">
          <div class="con_box">
            <span>윤종문 / 농협은행 / <a>110123456789</a></span>
            <span class="copy_btn" @click="copyAccount('110123456789')">복사</span>
          </div>
          <div class="con_box">
            <span>황인경 / 농협은행 / <a>110123456789</a></span>
            <span class="copy_btn" @click="copyAccount('110123456789')">복사</span>
          </div>
          <div class="con_box">
            <span>윤주현 / 신한은행 / <a>01051258018</a></span>
            <span class="copy_btn" @click="copyAccount('01051258018')">복사</span>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div class="detail_btn" @click="toggleDropdown(2)">
          <span>신부측 계좌번호 보기</span>
          <span class="down_btn" :class="{ 'rotate': isOpen2 }"><i class="ri-arrow-down-s-fill"></i></span>
        </div>
        <div class="detail_content" :class="{ 'show': isOpen2 }">
          <div class="con_box">
            <span>오연배 / 신한은행 / <a>110123456789</a></span>
            <span class="copy_btn" @click="copyAccount('110123456789')">복사</span>
          </div>
          <div class="con_box">
            <span>김은숙 / 신한은행 / <a>110123456789</a></span>
            <span class="copy_btn" @click="copyAccount('110123456789')">복사</span>
          </div>
          <div class="con_box">
            <span>오영경 / 신한은행 / <a>01084777856</a></span>
            <span class="copy_btn" @click="copyAccount('01084777856')">복사</span>
          </div>
        </div>
      </div>
      
      <h2 class="guestbook-title mt">축하 인사 전달하기</h2>
      
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
            <span style="display:none;" class="message-date">{{ formatDate(msg.created_at) }}</span>
          </div>
          <p class="message-content">{{ msg.message }}</p>
        </div>
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
const isOpen1 = ref(false)
const isOpen2 = ref(false)

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
  try {
    const { error } = await supabase
      .from('guestbook')
      .insert([
        {
          name: name.value,
          message: message.value,
        }
      ])

    if (error) throw error

    name.value = ''
    message.value = ''
    await fetchMessages()
    
  } catch (error) {
    console.error('Error submitting message:', error)
    alert('메시지 등록에 실패했습니다. 잠시 후 다시 시도해주세요.')
  }
}

const toggleDropdown = (num) => {
  if (num === 1) {
    isOpen1.value = !isOpen1.value
  } else {
    isOpen2.value = !isOpen2.value
  }
}

const copyAccount = async (accountNumber) => {
  try {
    await navigator.clipboard.writeText(accountNumber);
    alert('계좌번호가 복사되었습니다.');
  } catch (err) {
    console.error('계좌번호 복사 실패:', err);
    alert('계좌번호 복사에 실패했습니다.');
  }
};

onMounted(() => {
  fetchMessages()
})
</script>

<style lang="scss" scoped src="@/assets/scss/guestbook.scss"></style> 
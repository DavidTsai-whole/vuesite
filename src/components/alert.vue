<template>
  <div class="message-alert">
    <div class="alert alert-dismissible font-weight-bold"
    
      :class="'alert-' + item.status"
      v-for="(item, i) in messages" :key="i">
      <i class="far fa-check-circle text-success font-weight-bold"v-if="item.status !=='danger'"> {{ item.message }}</i>
       <i class="fas fa-times text-danger"v-if="item.status === 'danger'"> {{ item.message }}</i>
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>




  
  
  

 
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 2000);
    },
  },
  created() {
     const vm = this;

    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
     vm.$bus.$on('message:push', (message, status = 'warning') => {
       vm.updateMessage(message, status);
     });
    // vm.$bus.$emit('message:push');
  },
};
</script>

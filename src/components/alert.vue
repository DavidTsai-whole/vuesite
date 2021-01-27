<template>
  <div class="message-alert">
    <div class="alert alert-dismissible"
    
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
<style scoped>
.message-alert {
    position: fixed;
   top:20%;
    left:84%;
    z-index: 22231100;
  }
  .alert{
    font-size:20px;
    box-shadow:1px 3px 3px 1px rgba(0,0,0,0.6);
  }
  @media(max-width:1200px){
    .message-alert{
      left:78%;
    }
  }
  @media(max-width:992px){
    .message-alert{
      left:74%;
    }
  }
  @media(max-width:768px){
    .message-alert{
      left:66%;
    }
  }
  @media(max-width:576px){
    .message-alert{
      left:56%;
    }
  }

</style>

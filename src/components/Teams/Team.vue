<template>
  <div class='team-card q-pa-md full-width flex justify-between q-mt-md q-mb-md'>
      <span class='team-name-text'>{{teamName}}</span>
      <q-img src='icons/checkbox.png'  style='max-width: 16px'/>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'Team',
  props: {
    teamName: {
      type: String,
      required: true
    },
    verified: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
});
</script>

<style scoped>
.team-card {
  border-radius: 20px;
  background: white;
}
.team-name-text{
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1px;

  color: #171725;


}
</style>

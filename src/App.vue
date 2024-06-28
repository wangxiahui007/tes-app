
<template>
  <div>

    <n-tree :data="data" :node-props="nodeProps"></n-tree>

  </div>
</template>

<script setup>
import { ref } from "vue"
const data = ref([
  {
    key: 1,
    label: '道生一'
  },
  {
    key: 2,
    label: '一生二'
  }
])
const nodeProps =  ({ option }) => {
  return {
    onDblclick(event) {
      console.log("双击")
    },
    onClick(event) {
      console.log("单击")
    }
  };
}
</script>

<style scoped>

</style>

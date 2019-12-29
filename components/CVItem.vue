<template>
  <div>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <strong>{{ title }}</strong>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <i>{{ year }}</i>
        </div>
      </div>
    </div>
    <div class="has-text-left is-italic">
      {{ explanation }}
    </div>
    <div class="content">
      <ul id="regattas">
        <li v-for="value in regattas" :key="value">
          {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    year: { type: String, default: '' },
    explanation: { type: String, default: '' },
    regattas: {}
  }
}
</script>
<style scoped>
.level {
  margin-top: 24px;
  margin-bottom: 12px;
}
</style>

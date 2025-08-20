<script setup lang="ts">
import { UIButtonsButton } from "#components";
import type { NuxtError } from "nuxt/app";

const props = defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <div class="error-wrapper">
    <div class="error-container">
      <div class="error-status">{{ props.error?.statusCode }}</div>
      <div class="error-message">
        Страница не найдена, вернитесь на главную страницу
      </div>

      <NuxtLink to="/">
        <UIButtonsButton class="back-btn">На главную</UIButtonsButton>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.error-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.error-container {
  font-family: Roboto, sans-serif;
  color: #292929;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-status {
  font-size: 120px;
  font-weight: 500;
}

.error-message {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
}

.back-btn {
  width: 301px;
}
</style>

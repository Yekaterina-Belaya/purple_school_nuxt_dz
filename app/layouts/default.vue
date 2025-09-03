<script setup lang="ts">
import Exit from "~/components/UI/Icons/Exit.vue";
import Home from "~/components/UI/Icons/Home.vue";

const onLogout = () => {
  console.log("You've logged out");
};
</script>

<template>
  <div class="layout">
    <div class="sidebar-container">
      <div class="sidebar-wrapper">
        <header>
          <NuxtLink to="/">
            <Home class="icon" />
          </NuxtLink>
        </header>
        <footer>
          <Exit class="icon" @click="onLogout" />
        </footer>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

.sidebar-container {
  height: 90vh;
  margin-right: 32px;
}

.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 42px 28px;
  height: 100%;
  border-right: 1px solid #e6e6e6;
}

.icon {
  height: 24px;
  width: 24px;
  color: #191919;
}

.icon:hover {
  cursor: pointer;
}
</style>

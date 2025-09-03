<template>
  <button><slot /></button>
</template>

<style scoped>
button {
  background-color: #191919;
  border: none;
  color: white;
  padding: 11px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>

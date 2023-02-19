<script setup>
</script>

<template>
<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" href="#">Главное</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Очередь
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/Queue" class="dropdown-item" aria-current="page">Циклический сдвиг</router-link></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Стек
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/Stack" class="dropdown-item" aria-current="page">Поменять информацию местами</router-link></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Список
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/List" class="dropdown-item" aria-current="page">Метод наименьших квадратов</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
</style>

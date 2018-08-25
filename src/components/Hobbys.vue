<template>
    <div class="content">
      <ul>
        <li>Smash</li>
        <li>Reisen</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Hobbys"
    }
</script>

<style scoped>
  .content {
    padding: 7%;
    font-family: 'Renner*', Helvetica, Arial, sans-serif;;
  }
  ul {
    width: 100%;
    list-style-type: none;
    margin: auto;
    text-align: left;
    white-space: nowrap;
  }
  li {
    height: 50vh;
    width: 100px;
    margin: 10px;
    border: 1px solid red;
    display: inline-block;
    transition: width 1s ease;
  }
</style>

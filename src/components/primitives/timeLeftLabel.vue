<template>
  <div class="time-left">
    {{timeLeftFormatted}}
  </div>
</template>

<script>
export default {
  name: 'time-left-label',
  props: {
    timeLeft: Number,
  },
  computed: {
    timeLeftFormatted() {
      const minutes = Math.floor(this.timeLeft / 60);
      let seconds = `${this.timeLeft % 60}`;

      if (seconds.length === 1) {
        seconds = `0${seconds}`;
      }

      if (minutes) {
        return `Осталось ${minutes}:${seconds}`;
      }

      return `Осталось ${seconds} секунд`;
    },
  },
}
</script>

<style scoped>
.time-left {
  margin-top: 50px;
  font-size: 25px;
}
</style>

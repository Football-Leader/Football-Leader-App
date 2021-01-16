<template>
  <div class="settings">
    <div class="setting-item">
      <div class="label">Продолжительность одной игры (в минутах)</div>
      <a-input-number :value="gameDuration" :min="1" :max="120" @change="onChangeGameDuration" />
    </div>

    <div class="setting-item">
      <div class="label">Количество голов для досрочного завершения игры</div>
      <a-input-number :value="goalsToCompleteCount" :min="1" :max="120" @change="onChangeGoalsToCompleteCount" />
    </div>

    <div class="controls-area">
      <a-button block type="primary" @click="save">
        Сохранить
      </a-button>
      <a-button block type="secondary" @click="back">
        Назад без сохранения
      </a-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'settings-form',
  data() {
    return {
      gameDuration: null,
      goalsToCompleteCount: null,
    };
  },
  created() {
    this.gameDuration = this.settings.gameDuration;
    this.goalsToCompleteCount = this.settings.goalsToCompleteCount;
  },
  methods: {
    ...mapMutations(['editSettings']),
    onChangeGameDuration(val) {
      this.gameDuration = val;
    },
    onChangeGoalsToCompleteCount(val) {
      this.goalsToCompleteCount = val;
    },
    save() {
      this.editSettings({
        gameDuration: this.gameDuration,
        goalsToCompleteCount: this.goalsToCompleteCount,
      });

      this.back();
    },
    back() {
      this.$router.push({ name: 'main' });
    },
  },
  computed: {
    ...mapState(['settings']),
  },
}
</script>

<style scoped>
.settings {
  margin-top: 100px;
  padding: 0 10px;
}

.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.setting-item .label {
  max-width: 60%;
}

.controls-area {
  display: flex;
  margin-top: 50px;
}
</style>

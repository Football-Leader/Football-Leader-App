<template>
  <a-modal :visible="visible"
           title="Выберите две команды, которые начнут играть первыми"
           :ok-button-props="{ props: { disabled: !teamsAreSelected } }"
           :cancel-button-props="{ props: { disabled: true } }"
           @ok="handleOk">
    <div>
      <div>
        <a-select default-value="" style="width: 120px" @change="selectFirstTeam">
          <a-select-option v-for="team in teams" :key="team.id" :value="team.id" >
            {{team.name}}
          </a-select-option>
        </a-select>
      </div>
      <div>
        <a-select default-value="" style="width: 120px" @change="selectSecondTeam">
          <a-select-option  v-for="team in teams" :key="team.id" :value="team.id">
            {{team.name}}
          </a-select-option>
        </a-select>
      </div>
    </div>
  </a-modal>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'select-beginners-modal',
    props: {
      visible: Boolean,
    },
    data() {
      return {
        firstTeamId: null,
        secondTeamId: null,
      };
    },
    computed: {
      ...mapState(['currentGameDay']),
      teamsAreSelected() {
        return this.firstTeamId && this.secondTeamId;
      },
      teams() {
        const allTeams = this.currentGameDay.teams;
        const selectedTeams = [this.firstTeamId, this.secondTeamId].filter(Boolean);

        return allTeams.filter(({ id }) => !selectedTeams.includes(id));
      },
    },
    methods: {
      selectFirstTeam(id) {
        this.firstTeamId = id;
      },
      selectSecondTeam(id) {
        this.secondTeamId = id;
      },
      handleOk() {
        this.$emit('ok', { firstTeamId: this.firstTeamId, secondTeamId: this.secondTeamId });
      },
    },
  }
</script>

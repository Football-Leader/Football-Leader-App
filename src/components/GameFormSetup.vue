<template>
    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="20">
        <a-col :span="24" v-for="team in teams" :key="team.name">
          <a-card :title="team.name" :style="{ margin: '10px 0' }">
            <a-list bordered :data-source="getPlayersListForTeam(team)">
              <a-list-item slot="renderItem" slot-scope="item">
                {{ item.name }}
                <template slot="actions">
                  <button @click="deletePlayerFromTeam(team, item)">Удалить</button>
                </template>
              </a-list-item>
            </a-list>
            <a-select default-value="" style="width: 120px" @change="(value) => handleChange(team, value)">
              <a-select-option :value="player.id" v-for="player in readyForSelect" :key="player.id">
                {{player.name}}
              </a-select-option>
            </a-select>
          </a-card>
        </a-col>
      </a-row>


      <a-button block @click="next" class="button" v-if="teams.every(team => team.players.length === 5)">
            Продолжить
      </a-button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'game-form-setup-view',
  data() {
    return {
      teams: [
        {
          name: 'Жёлтая Команда',
          id: 1,
          players: [
            '1',
            '2',
            '3',
            '4',
            '5',
          ],
        },
        {
          name: 'Красная Команда',
          id: 2,
          players: [
            '6',
            '7',
            '8',
            '9',
            '10',
          ],
        },
        {
          name: 'Фиолетовая Команда',
          id: 3,
          players: [
            '11',
            '12',
            '13',
            '14',
            '15',
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState(['players']),
    readyForSelect() {
      return this.players.filter((player) => {
        return !this.teams.some((team) => team.players.includes(player.id));
      });
    },
  },
  methods: {
    ...mapMutations(['createGameDay']),
    handleChange(team, value) {
      this.teams.splice(
          this.teams.findIndex(t => t.name === team.name),
          1,
          { ...team, players: [...team.players, value] },
      );
    },
    getPlayersListForTeam(team) {
      return team.players.map((playerId) => {
        return this.players.find(p => p.id === playerId);
      });
    },
    deletePlayerFromTeam(team, player) {
      const newTeam = { ...team };
      newTeam.players = team.players.filter(p => p !== player.id);


      console.log('newTeam', newTeam);
      this.teams.splice(
        this.teams.findIndex(t => t.name === team.name),
        1,
        newTeam,
      );
    },
    next() {
      this.createGameDay({ teams: this.teams });
      this.$router.push({ name: 'process' });
    },
  },
}
</script>

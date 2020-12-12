<template>
  <div>
    <a-list bordered :data-source="players">
      <a-list-item slot="renderItem" slot-scope="item">
        {{ item.name }}
      </a-list-item>
      <div slot="header">
        Участники чата
      </div>
    </a-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'players-view',
  computed: {
    ...mapState(['players']),
  },
};
</script>

<template>
  <div class="container">
    <p>{{ msg }}</p>
    <button type="button" class="btn btn-success btn-sm" v-b-modal.sega-modal>show sega</button>
    <b-modal ref="addBookModal"
            id="sega-modal"
            title="Show sega list"
            hide-footer>
        <button v-on:click="gameListGet" class="btn btn-success btn-sm">Get</button>
        <button v-on:click="gameListClear" class="btn btn-success btn-sm">Clear</button>
        <p>{{ testMsg }}</p>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'GetList',
  data() {
    return {
      msg: '',
      testMsg: 'wait',
    };
  },
  methods: {
    getMessage() {
      const path = 'http://localhost:5000/getList';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    gameListGet() {
      const path = 'http://localhost:5000/getList';
      axios.get(path)
        .then((res) => {
          this.testMsg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    gameListClear() {
      this.testMsg = '';
    },
  },
  created() {
    this.getMessage();
  },
};
</script>

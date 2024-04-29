Vue.createApp({
    data() {
      return {
        rndMails: [],
      };
    },
    created() {
      this.generateMails();
    },
    methods: {
        generateMails: function () {
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    this.rndMails.push(resp.data.response);
                });
            }
        },
    },
}).mount("#app");
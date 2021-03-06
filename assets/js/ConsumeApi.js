/**
 * Consume API module.
 *
 * Demo to show consuming an API endpoint, including handling the display loading and error states.
 */
const PRICES_API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

const ConsumeApi = {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  methods: {
    async requestApi() {
      try {
        const resp = await fetch(PRICES_API_URL);
        if (!resp.ok) {
          throw new Error(`${resp.status} - ${resp.statusText}`);
        }
        const data = await resp.json();
        this.info = data.bpi;
      } catch (err) {
        console.error(`Unable to fetch currency data. Error: ${err}`);
        this.errored = true;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.requestApi();
  },
  template: `
    <h3>Bitcoin Price Index</h3>

    <section v-if="errored">
      <p>
        We're sorry, we're unable to retrieve this information at the moment, please try again later
      </p>
    </section>

    <section v-else>
      <div v-if="loading">
        Loading...
      </div>

      <div v-else v-for="currency in info" class="currency">
        {{ currency.description }}:

        <span>
          <b>
            <span v-html="currency.symbol"> </span>
            {{ currency.rate_float.toFixed(2) }}
          </b>
        </span>
      </div>
    </section>
  `,
};

export default ConsumeApi;

/**
 * Consume API module.
 *
 * This file exists to show how the main.js loaded on the frontend will then
 * fetch this file and import it. So your "import" statements work in the browser
 * and not just in Node apps. This means you can spread your Vue components or views
 * out across a few files - at the cost of loading each file separately rather than
 * a single bundled (and possibly minified) file.
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
  async mounted() {
    try {
      const resp = await fetch(PRICES_API_URL);
      const data = await resp.json();
      this.info = data.bpi;
    } catch (err) {
      console.error(`Unable to fetch currency data. Error: ${err}`);
      this.errored = true;
    } finally {
      this.loading = false;
    }
  },
  template: `
    <h3>Bitcoin Price Index</h3>

    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

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

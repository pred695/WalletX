import { Inngest } from "inngest";
const inngest = new Inngest({
  id: "walletX",
  name: "walletX",
  retryFunction: async (attempt) => ({
    delay: 1000 * Math.pow(2, attempt),
    maxAttempts: 3,
  }),
});
export default inngest;

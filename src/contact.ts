import { sleep, check } from "k6";
import { Options } from "k6/options";
import { getContactsPhp } from "../.axios/default";

export let options: Options = {
  vus: 1,
  duration: "10s",
};

export default async () => {
  const res = await getContactsPhp();
  check(res, {
    "status is 200": () => res.status === 200,
  });
  sleep(1);
};

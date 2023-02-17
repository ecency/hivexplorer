import { Client, RCAPI, utils } from "@hiveio/dhive";
import SERVERS from "../constants/servers.json";
import { UserTypeList } from "../pages/profile/userTypes";
import { RCAccount } from "@hiveio/dhive/lib/chain/rc";

// import { SMTAsset } from '@hiveio/dhive';

// export enum Symbol {
//     HIVE = 'HIVE',
//     HBD = 'HBD',
//     VESTS = 'VESTS',
// }

// export enum NaiMap {
//     '@@000000021' = 'HIVE',
//     '@@000000013' = 'HBD',
//     '@@000000037' = 'VESTS',
// }


export const client = new Client(SERVERS, {
  timeout: 3000,
  failoverThreshold: 3,
  consoleOnFailover: true
});
export const findRcAccounts = (username: string): Promise<RCAccount[]> =>
  new RCAPI(client).findRCAccounts([username]);

export const votingPower = (account: UserTypeList): number => {
  // @ts-ignore "Account" is compatible with dhive's "ExtendedAccount"
  const calc = account && client.rc.calculateVPMana(account);
  const { percentage } = calc;

  return percentage / 100;
};

const HIVE_VOTING_MANA_REGENERATION_SECONDS = 5 * 60 * 60 * 24; //5 days

export const downVotingPower = (account: UserTypeList): number => {
  const totalShares =
    parseFloat(account.vesting_shares) +
    parseFloat(account.received_vesting_shares) -
    parseFloat(account.delegated_vesting_shares) -
    parseFloat(account.vesting_withdraw_rate);
  const elapsed = Math.floor(Date.now() / 1000) - account.downvote_manabar.last_update_time;
  const maxMana = (totalShares * 1000000) / 4;

  let currentMana =
    parseFloat(account.downvote_manabar.current_mana.toString()) +
    (elapsed * maxMana) / HIVE_VOTING_MANA_REGENERATION_SECONDS;

  if (currentMana > maxMana) {
    currentMana = maxMana;
  }
  const currentManaPerc = (currentMana * 100) / maxMana;

  if (isNaN(currentManaPerc)) {
    return 0;
  }

  if (currentManaPerc > 100) {
    return 100;
  }
  return currentManaPerc;
};

export const rcPower = (account: RCAccount): number => {
  const calc = client.rc.calculateRCMana(account);
  const { percentage } = calc;
  return percentage / 100;
};
export enum NaiMap {
  '@@000000021' = 'HIVE',
  '@@000000013' = 'HBD',
  '@@000000037' = 'VESTS',
}
export const SMTAssetCalc = (amount: string | number,precision:number,nai:string):string | number => {
  const val=parseFloat(amount.toString()) / Math.pow(10,precision)
 return val+' '+NaiMap[nai]
};

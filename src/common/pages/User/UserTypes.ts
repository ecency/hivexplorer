export interface UserTypeList {
    id:number,
    name:string,
    owner: object,
    active: object,
    posting: object,
    memo_key: object,
    json_metadata: string
    posting_json_metadata:string
    proxy: string
    last_owner_update: string
    last_account_update: string
    created: string
    mined: boolean
    recovery_account: string
    last_account_recovery: string
    reset_account: string
    comment_count: number
    lifetime_vote_count: number
    post_count: number
    can_vote: boolean
    voting_manabar: {
    current_mana: string
    last_update_time: number
    }
    downvote_manabar: {
    current_mana: string
    last_update_time: number
        }
    voting_power: number
    balance: string
    savings_balance:string
    hbd_balance:string
    hbd_seconds: string
    hbd_seconds_last_update: string
    hbd_last_interest_payment: string
    savings_hbd_balance: string
    savings_hbd_seconds: string
    savings_hbd_seconds_last_update: string
    savings_hbd_last_interest_payment: string
    savings_withdraw_requests: 0
    reward_hbd_balance: string
    reward_hive_balance: string
    reward_vesting_balance: string
    reward_vesting_hive: string
    vesting_shares: string
    delegated_vesting_shares: string
    received_vesting_shares: string
    vesting_withdraw_rate: string
    post_voting_power: string
    next_vesting_withdrawal:string
    withdrawn: number
    to_withdraw: number
    withdraw_routes: number
    pending_transfers: number
    curation_rewards: number
    posting_rewards: number
    proxied_vsf_votes:object
    witnesses_voted_for: number
    last_post: string
    last_root_post: string
    last_vote_time: string
    post_bandwidth: number
    pending_claimed_accounts: number
    governance_vote_expiration_ts: string
    delayed_votes: object
    open_recurrent_transfers: number
    vesting_balance: string
    reputation: string
    transfer_history: object
    market_history: object
    post_history: object
    vote_history: object
    other_history: object
    witness_votes: object
    tags_usage: object
    guest_bloggers: object
}

interface AmountPrecisionNai {
        amount: string
        precision: number
        Nai: string
}
export interface UserTransactionType {
    
    trx_id:string
    block:number,
    trx_in_block:number,
    op_in_trx:number,
    virtual_op:number,
    timestamp:string,
    op:{
        
        type:string,
        value:{
            producer:string,
            curator:string,
            publisher:string,
            voter: string
            author: string
            benefactor: string
            permlink: string
            weight: string | number
            rshares: string | number
            total_vote_weight: string
            owner:string
            required_auths:string[]
            required_posting_auths: string[]
            id: string
            json: string
            props:object
            extensions:string[]
            creator: string,
            account: string,
            memo: string
            from: string
            to: string
            author_rewards: number
            reward_hive: AmountPrecisionNai
            reward_hbd: AmountPrecisionNai
            reward_vests: AmountPrecisionNai
            fee: AmountPrecisionNai
            reward:AmountPrecisionNai
            vesting_shares:AmountPrecisionNai
            pending_payout:AmountPrecisionNai
            hbd_payout:AmountPrecisionNai
            vesting_payout:AmountPrecisionNai
            amount: AmountPrecisionNai
            payout: AmountPrecisionNai
            total_payout_value:AmountPrecisionNai
            curator_payout_value: AmountPrecisionNai
            beneficiary_payout_value: AmountPrecisionNai
            curators_vesting_payout:AmountPrecisionNai
            exchange_rate: {
                base: AmountPrecisionNai,
                quote: AmountPrecisionNai
            }
        }
     
    }
    operation_id:number
}
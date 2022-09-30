import { ConfigItems } from "../../../config";

// Get witness Account 
export const getAccount=(user:string)=>{
    return `${ConfigItems.baseUrl}/api/get_accounts?name[]=${user}`
}

// Get RC Account
export const getRCAccount=(user:string)=>{
    return `${ConfigItems.baseUrl}/api/find_rc_accounts?accounts[]=${user}`
}

//Get All Proposals
export const getProposals=(status:string)=>{
    return `${ConfigItems.baseUrl}/api/list_proposals?order="by_total_votes"&order_direction="ascending"&status="${status}"&limit=200&start=["0"]`
}

// Get single Proposal
export const getSingleProposal=(proposal_id:number)=>{
    return `${ConfigItems.baseUrl}/api/find_proposals?proposal_ids=[${proposal_id}]`
}
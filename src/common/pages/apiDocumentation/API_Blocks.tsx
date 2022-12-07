
import React, { useEffect, useState } from 'react';
import { Link, match } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';

import { _t } from '../../i18n';
import { Accordion } from 'react-bootstrap';
import { showLessIcon, showMoreIcon } from '../../img/svg';
import { ConfigItems } from '../../../../config';
import Api_accordion_body from './Api_accordion_body';

const BLOCKS_ITEMS = [
    {
    name: _t("api_blocks.head_block"),
    description:_t("api_blocks.head_block_description"),
    url:`${ConfigItems.baseUrl}/api/get_dynamic_global_properties`,
    response:`
{
    head_block_number: 70315459
    head_block_id: "0430edc35a8a67bb605e65bb54b63ea5eef51944"
    time: "2022-12-07T11:47:27"
    current_witness: "roelandp"
    total_pow: 514415
    num_pow_witnesses: 172
    virtual_supply: "471274443.274 HIVE"
    current_supply: "393458619.704 HIVE"
    init_hbd_supply: "0.000 HBD"
    current_hbd_supply: "28091512.309 HBD"
    ....
}`
    },
    {
    name: _t("api_blocks.get_blocks"),
    description:_t("api_blocks.get_blocks_description"),
    url:`${ConfigItems.baseUrl}/api/get_block?block_num=8675309`,
    parameter:'block_num(int)',
    EndPoint:`${ConfigItems.baseUrl}/api/get_block?block_num=<{block_num}>`,
    response:`
{
    "previous": "0000000000000000000000000000000000000000",
    "timestamp": "2016-03-24T16:05:00",
    "witness": "initminer",
    "transaction_merkle_root": "0000000000000000000000000000000000000000",
    "extensions": [],
    "witness_signature": "204f8ad56a8f5cf722a02b035a61b500aa59b9519b2c33c77a80c0a714680a5a5a7a340d909d19996613c5e4ae92146b9add8a7a663eef37d837ef881477313043",
    "transactions": [],
    "block_id": "0000000109833ce528d5bbfb3f6225b39ee10086",
    "signing_key": "STM8GC13uCZbP44HzMLV6zPZGwVQ8Nt4Kji8PapsPiNq1BK153XTX",
    "transaction_ids": []
}
        `
    }
];
const API_Blocks = (props: any) => {
    const currTheme = useSelector((state: any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const [openBody, setOpenBody] = useState(true)
    return (
        <>
        <div className='api-blocks'>
        <div className=''>
                <h1>{_t('api_blocks.title')}</h1>
                <p>{_t('api_blocks.description')}</p>
            </div>
            <Accordion className={currTheme === "day" ? "accordion-day" : "accordion_night"} defaultActiveKey={['0']} alwaysOpen={true}>
                {BLOCKS_ITEMS.map((item:any,i:number)=>{
                     return(
                        <Accordion.Item key={i+item.name} eventKey={`${i}`} onClick={() => setOpenBody(!openBody)}>
                        <Accordion.Header>
        
                            <span>{item.name}</span>
                            <span>{openBody ? showLessIcon(themeContrastColor) : showMoreIcon(themeContrastColor)}</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Api_accordion_body 
                                description={item.description}
                                response={item.response}
                                url={item.url}
                                parameters={item.parameters}
                                />
                            </Accordion.Body>
                        </Accordion.Item>
                     )

                })}
              
  
      
            </Accordion>
        </div>

        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(API_Blocks));
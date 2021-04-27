import React, { useState, useEffect } from 'react';
import PersonRow from './PersonRow'
import PersonHeader from './PersonHeader'

export default function List(props){
    return(
        <table>
            <PersonHeader/>
            {props.list.map(p => <PersonRow person={p} />)}
        </table>
    )
}

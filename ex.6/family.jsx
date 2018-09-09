import React from 'react'
import Member from './member'
import {childrenWithProps} from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Familia</h1>
        {childrenWithProps(props)}
    </div>
)
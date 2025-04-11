"use client"
import React from 'react'
import Menu from './Menu/page'
import More from './More/page'
import Ben from './Ben/page'
import Omi from './Omi/page'
import Store from './Store/page'
import Pwa from './Pwa/page'
import Wining from './Wining/page'
import Online from './Online/page'
import Development from './Development/page'
import Upgrad from './Upgrad/page'
import Cycle from './Cycle/page'
import Wifi from './Wifi/page'
import Diff from './Diff/page'
import Sec16 from './Sec16/page'
import Sec14 from './Sec14/page'
import Process from './Process/page'
import Last from './Last/page'
const page = () => {
  return (
    <div>
<Menu/>
<More/>
<Ben/>
<Omi/>
<Store/>
<Pwa/>
<Wining/>
<Online/>
<Development/>
<Upgrad/>
{/* <Cycle/> */}
<Wifi/>
<Diff/>
<Sec16/>
<Sec14/>
<Process/>
<Last/>
    </div>
  )
}

export default page
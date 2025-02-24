import React, { useState } from 'react'
import ButtonTab from '../components/Trims/Buttons/ButtonTab';
import TabContent from '../components/Trims/Tab/TabContent';

const Readme = () => {
  const [tab, setTab] = useState('home');

  return (
    <section className='flex flex-col justify-center gap-5'>
      <div className='flex flex-row justify-start gap-1 py-1'>                  
         <ButtonTab tab={tab} setTab={setTab} name="home" style="" />         
         <ButtonTab tab={tab} setTab={setTab} name="Other" style="" />         
      </div>      
      
      <TabContent tab={tab} name="home" content={'<HomeContent />'} />
      <TabContent tab={tab} name="other" content={'<LeadMainContent />'} />
      
    </section>
  )
}

export default Readme
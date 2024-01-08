import React from 'react'
import "./Home.css";




const Home = ({theme}) => {
  return (
    <div className='bigContainer' style={{backgroundColor:theme=="light"?"#F5E8C7":"black"}}>

      <div className='text' style={{flex:'flex',flexWrap:'wrap',backgroundColor:theme=="light"?"#F5E8C7":"black" }} >
      <h1><span>Hey</span>I<span>Am</span></h1>
     
      <h1><span>Arpit</span>Jain<span></span></h1>
     
      

      </div >
      

      <div className="container" >
    <div className="error404page">
        <div className="newcharacter404">
            <div className="chair404"></div>
            <div className="leftshoe404"></div>
            <div className="rightshoe404"></div>
            <div className="legs404"></div>
            <div className="torso404">
                <div className="body404"></div>
                <div className="leftarm404"></div>
                <div className="rightarm404"></div>
                <div className="head404">
                    <div className="eyes404"></div>
                </div>
            </div>
            <div className="laptop404"></div>
        </div>
    </div>
</div>


<div className='content2' style={{backgroundColor:theme=="light"?"#818FB4":"#363062",borderRadius:"20%"}}>
<div className="contentBro">
      <div className="content__container">
        <p className="content__container__text">Hello</p>
        <ul className="content__container__list">
          <li className="content__container__list__item">World !</li>
          <li className="content__container__list__item">You</li>
          <li className="content__container__list__item">users !</li>
         
          <li className="content__container__list__item">everybody !</li>
          {/* <li className="content__container__list__item">World !</li> */}
        </ul>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Home

import Navbar3 from './components/Navbar3'
import { WavyBackground } from './components/ui/WavyBackground'
import { FeaturesSectionDemo } from './components/ui/FeaturesSectionDemo'
import bgImage from "/images/hero/bg.jpeg"
// import { TimeLine } from './components/ui/Timeline'
// import {TimelineEntry} from "./components/ui/TimelineEntry"
// import { GlowingEffect } from './components/ui/GlowingEffect'
// import { EvervaultCard } from './components/ui/EvervaultCard'
// import { LayoutGrid } from './components/ui/LayoutGrid'
// import { MenuItem } from './components/ui/MenuItem'
import './App.css'
// import { Lamp } from './components/ui/Lamp'
// import { Cards } from './components/ui/Cards'
// import pathLengths from './components/ui/pathLengths'
// import { GoogleGeminiEffect } from './components/ui/GoogleGeminiEffect'

function App() {

  return (
    <>
    <div className="  overflow-auto scrollbar ">
     <Navbar3/>
     {/* <TimeLine data={TimelineEntry}/> */}
     <div >
     <WavyBackground className="heading text-black  text-7xl font-extrabold ml-28" blur={0} backgroundImage={bgImage} desc="Delivering Quality Software Products and Premium IT Services Since 2013">
      BigByteWorld
     </WavyBackground>
     </div>
<div >
<FeaturesSectionDemo/>

     {/* <GlowingEffect blur={10} inactiveZone={0.7} proximity={1} variant="default" spread={50} glow={true} disabled={false} /> */}

     {/* <GoogleGeminiEffect pathLengths={pathLengths}/> */}
     {/* <MenuItem className="menu"/> */}
     {/* <EvervaultCard text="BigByte World"/> */}
     {/* <Lamp/> */}
     {/* <LayoutGrid card={Cards} cards={Cards} /> */}
     </div>
     </div>
    </>
  )
}

export default App

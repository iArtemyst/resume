import Image from "next/image";
import './globals.css';
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

import * as SVGComponents from "./svgs/index";

const efyWebsite = "https://www.eevee-feywild.com"
const bebasNeue = Bebas_Neue({weight: "400"});

// ---------------------------------------------------

function SectionTitle({SecTitle = "Section Title"}: {SecTitle:String}) {

  return (
    <div className="relative w-full h-auto flex">
      <h1 className={`${bebasNeue.className} relative text-textMedium sm:text-textXL mr-auto font-bold`}>{SecTitle}</h1>
    </div>
  )
}

function MakeList({listItems = []}: {listItems:String[]}) {
  return (
    <div className="w-full h-auto">
        <ul className="relative">
            {listItems.map((listPoint, index) => (
                <li className="xl:list-disc list-inside text-pretty text-textXS md:text-textSmall list-none" key={index}>{listPoint}</li>
            ))}
        </ul>
    </div>
  )
}

function InfoTitle({JobTitle = "Job Title", Company = "Company", Timeline = "From Date to Date"}: {JobTitle:String, Company:String, Timeline:String}) {
  return( 
    <>
      <div className={'block relative w-full overflow-clip mb-2'}>
        <div className="block">
          <p className="relative mr-auto left-0 w-auto h-auto text-nowrap text-ellipsis text-textXS sm:text-textSmall md:text-textSmall lg:text-textMedium font-bold">{JobTitle}</p>
          <p className="relative mr-auto left-0 w-auto h-auto text-nowrap text-ellipsis text-textXS sm:text-textSmall md:text-textSmall lg:text-textMedium font-bold">{Company}</p>
        </div>
        <p className="relative ml-auto w-30px h-auto text-nowrap text-left text-textXS md:text-textSmall">{Timeline}</p>
      </div>      
    </>
  )
}

// ---------------------------------------------------

function ResumeTitleSection () {
  
  function SVGwText ({children, svgText = ""}: {children:any, svgText:String}) {
    return (
      <>
        <div className="relative flex w-full h-[32px] md:h-[36px] px-2 md:px-4 rounded-[.5em] justify-center
        hover:shadow-[3px_1px_6px_#00000010,-3px_-1px_6px_#FFFFFF20] shadow-[1px_1px_2px_#00000020,-1px_-1px_2px_#FFFFFF30] active:shadow-[inset_3px_1px_6px_#00000020,inset_-3px_-1px_6px_#FFFFFF30]">
            <div className="w-auto h-auto content-center">{children}</div>
            <p className="relative left-0 text-textXS lg:text-textSmall text-nowrap content-center pl-1">{svgText}</p>
        </div>
      </>
    )
    }
  
  return (
      <div className="relative flex-row w-full flex-grow h-fit p-2 text-tirColor">
          
          <div className="w-full sm:w-[35%] justify-self-center">
            <SVGComponents.EYLogoSVG/>
          </div>
    
          <h1 className={`${bebasNeue.className} w-fit h-full justify-self-center text-textLarge sm:text-textXL text-center text-nowrap px-3 py-1 rounded-[.5em] mb-1`}>Creative Designer</h1>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 lg:gap-12 justify-items-center justify-self-center jusitfy-evenly">
            <SVGwText svgText="Cell Phone">
              <SVGComponents.PhoneSVGIcon/>
            </SVGwText>

            <SVGwText svgText="Email Contact">
              <SVGComponents.EmailSVGIcon/>
            </SVGwText>

            <SVGwText svgText="Portfolio Website">
              <SVGComponents.WebSVGIcon/>
            </SVGwText>

            <SVGwText svgText="Location">
              <SVGComponents.CitySVGIcon/>
            </SVGwText>
          </div>
        </div>
    )
}

function IntroductionSection () {
  const IntroListItems = [
    "Skilled production of user experience products in several major software packages",
    "Worked directly with developers to contribute and deliver the highest quality product",
    "Creative and motivated artist with experience in interface, graphics, video, animation, games, and simulations",
    "Knowledgable of several coding languages for web and product development",
    "Experience creating interactive prototypes and animated user interfaces",
  ]
  
  return(
    <div className="relative w-full h-[10%] min-h-fit" >
      <div className="text-gradientColor1">
        <SectionTitle SecTitle="Introduction"/>
      </div>
      <MakeList listItems={IntroListItems}/>
    </div>
  )
}

function EmploymentSection () {
  const KVListItems = [
    "Skilled production of user experience products in several major software packages",
    "Worked directly with developers to contribute and deliver the highest quality product",
    "Creative and motivated artist with experience in interface, graphics, video, animation, games, and simulations",
    "Knowledgable of several coding languages for web and product development",
    "Experience creating interactive prototypes and animated user interfaces",
  ]

  const ADEXListItems = [
    "Collaborated with engineers to design and develop the “Pizza Portal” for Little Caesars that was distributed to over 4,000 locations nationwide",
    "Assisted in physical builds of engineering models for full product testing and research with clients",
    "Sketched and modeled assecories and parts for consumer tech products",
  ]

  const SmartShapeListItems = [
    "Researched and developed mockup screens for several concept medical apps and products",
    "Designed a conceptual mockup of a next gen IOT medical mirror that was showcased at the Medical Innovation Summit in Cleveland, Ohio",
    "Created pitch decks for clients of Fortune 500 companies such as Clorox, Hefty, Purell, Diebold, and Honeywell. and start ups in the consumer product and tech industries",
  ]
  
  function EmploymentItem ({jobName= "", jobCompany="", jobTimeline="", liItems = []}: {jobName:String, jobCompany:String, jobTimeline:String, liItems:String[]}) {
    return (
      <div className="w-full rounded-xl mx-0 lg:mx-2 p-0 lg:p-3 my-3 lg:my-0">
          <InfoTitle JobTitle={jobName} Company={jobCompany} Timeline={jobTimeline}/>
          <MakeList listItems={liItems} />
      </div>
    )
  }

  return (
      <div className="w-full h-auto py-2">
        <div className="text-gradientColor2">
        <SectionTitle SecTitle="Employment and Experience"/>
        </div>

        <div className="block lg:flex w-full h-auto">
          <EmploymentItem jobName="Designer" jobCompany="Kinetic Vision" jobTimeline="Jan 2018 - Present" liItems={KVListItems}/>
          <EmploymentItem jobName="Industrial Design Intern" jobCompany="ADEX International" jobTimeline="Fall Semester 2016 + Summer Semester 2017" liItems={ADEXListItems}/>
          <EmploymentItem jobName="Product Design Intern" jobCompany="SmartShape Design" jobTimeline="Spring Semeseter 2016" liItems={SmartShapeListItems}/>
        </div>
      </div>
  )
}

function EducationSection () {
  const EduListItems = [
    "Relevant coursework: Product Design, Designing for Human Experiences, User Interface Design, Motion and Animation",
    "Two years of internship study with three companies producing real world products and solutions for consumers",
    "Used industry leading software such as Figma, Sketch, Adobe Illustrator, and Photoshop to model and design assets",
    "Capstone Project: Research and design a new game mode and the accompanying assets for the existing FPS video game “Overwatch”",
]  
  
  return (
      <div className="flex-row w-full">
        <div className="text-gradientColor3">
          <SectionTitle SecTitle="Education" />
        </div>
        <div>
          <InfoTitle JobTitle="B.S. in Industrial Design" Company="Univeristy of Cincinnati" Timeline="Graduated May 2019"/>
          <MakeList listItems={EduListItems} />
        </div>
      </div>
    )
}

function SkillSoftwareSection () {
  const SoftListPoints1 = [ "Figma, Sketch, UXPin, Adobe XD",]
  const SoftListPoints2 = [ "HTML, Javascript, CSS, NextJS, React, Python",]
  const SoftListPoints3 = [ "Photoshop, Illustrator, InDesign, Procreate",]
  const SoftListPoints4 = [ "After Effects, Premeire Pro, Houdini, Cinema 4D",]
  const SoftListPoints5 = [ "Blender, ZBrush, 3DS Max, Maya, Susbstance 3D"]

  const SkillListPoints1 = ["Product Design", "Interface Design", "Motion Graphics", "Interaction Design", "Visual Direction", "Game Design", "Storytelling"]
  const SkillListPoints2 = ["Creative Website Design", "Simulations and Fluids", "Procedural Generation", "Modeling and Textures", "Rigging and Animation", "Creative Problem Solving", "Low Handicap Golfer"]
  
  function SecondaryTitle({minorTitle = "Secondary Title"}: {minorTitle:String}) {
    return (
        <h1 className="mr-2 font-black text-textXS sm:text-textMedium text-tirColor">{minorTitle}</h1>
    )
  }
  
  function SoftwareListItems({softlistItems = []}: {softlistItems:String[]}) {
    return (
      <div className="flex">
          <ul className="relative flex">
              {softlistItems.map((listPoint, index) => (
                  <li className="relative flex content-center text-textXS md:text-textSmall pr-1" key={index}>{listPoint}</li>
              ))}
          </ul>
      </div>
    )
  }
  
  function SkillsListItems({skilllistItems = []}: {skilllistItems:String[]}) {
    return (
      <div>
          <ul className="text-textMedium flex-row">
              {skilllistItems.map((listPoint, index) => (
                  <li key={index} className="relative flex content-center text-textXS md:text-textSmall pr-1">{listPoint}</li>
              ))}
          </ul>
      </div>
    )
  }
  
  return (
    <div className="relative w-full h-auto block sm:flex">
      <div className="relative w-full h-full flex-row">

            <SectionTitle SecTitle="Software" />

        <div className="text-textSmall h-full w-full">
            <div className="block md:flex">
              <SecondaryTitle minorTitle="UI/UX" />
              <SoftwareListItems softlistItems={SoftListPoints1} />
            </div>
            <div className="block md:flex">
              <SecondaryTitle minorTitle="Coding" />
              <SoftwareListItems softlistItems={SoftListPoints2} />  
            </div>
            <div className="block md:flex">
              <SecondaryTitle minorTitle="Graphics" />
              <SoftwareListItems softlistItems={SoftListPoints3} /> 
            </div>
            <div className="block md:flex">
              <SecondaryTitle minorTitle="Motion" />
              <SoftwareListItems softlistItems={SoftListPoints4} />  
            </div>
            <div className="block md:flex">
              <SecondaryTitle minorTitle="3D" />
              <SoftwareListItems softlistItems={SoftListPoints5} /> 
            </div>
        </div>
      </div>

      <div className="w-full h-auto flex-row">

            <SectionTitle SecTitle="Skills"/>


        <div className="w-full h-full flex-col columns-2">
          <ul className="text-textSmall">
            <SkillsListItems skilllistItems={SkillListPoints1} />
          </ul>
          <ul className="text-textSmall">
          <SkillsListItems skilllistItems={SkillListPoints2} />
          </ul>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------

function ColorBarVert() {
  return (
    <div className="relative w-[8%] h-full bg-gradient-to-b from-gradientColor1 to-gradientColor4"></div>
  )
}

function ResumeInformationSide () {
  return (
    <>
      <div className="relative flex-row max-w-[1440px] w-full h-full px-2 sm:px-8 py-6 bg-priColor overflow-y-auto no-scrollbar"> 
          <ResumeTitleSection />

          <div className="w-full h-[.125rem] bg-gradientColor1 rounded-full my-2 md:my-4" />

          <IntroductionSection />
            
          <div className="w-full h-[.125rem] bg-gradientColor2 rounded-full my-2 md:my-4" />

          <EmploymentSection />

          <div className="w-full h-[.125rem] bg-gradientColor3 rounded-full my-2 md:my-4" />
            
          <EducationSection />

          <div className="w-full h-[.125rem] bg-gradientColor4 rounded-full my-2 md:my-4" />
        
          <SkillSoftwareSection />
      </div>
    </>
  )
}

// ---------------------------------------------------

function ResumeContainer() {
  return (
      <div className="relative h-full w-full flex  overflow-clip rounded-[2em] justify-self-center">
              <ColorBarVert />
              <ResumeInformationSide />
      </div>

  )
}

export default function RenderResumePage() {
  return (
    <main className="absolute left-0 right-0 top-0 bottom-0 p-8 bg-secondaryColor">
        <ResumeContainer />
    </main>
  );
}
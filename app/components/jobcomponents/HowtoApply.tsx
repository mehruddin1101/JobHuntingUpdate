import PlaceHolder from "./PlaceHolder";

import { Editor } from 'primereact/editor';
        
interface ApplyInstruction{
    appyInstructions :string
}
const HowToApply:React.FC<ApplyInstruction> = ({appyInstructions}) =>{
    return (
        <>
        <PlaceHolder text = "How to Apply For GamesKraft Careers 2024 Hiring?"/>
        <h2 style={{color:'black'}}> 
       

        <Editor  className="mt-4" value={appyInstructions} readOnly style={{ height: 'auto', fontSize:'1rem' }} />
       
        </h2>
        </>
    )
}
export default HowToApply;
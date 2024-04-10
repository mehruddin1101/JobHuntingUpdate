import PlaceHolder from "./PlaceHolder";

interface ApplyInstruction{
    appyInstructions :string
}
const HowToApply:React.FC<ApplyInstruction> = ({appyInstructions}) =>{
    return (
        <>
        <PlaceHolder text = "How to Apply For GamesKraft Careers 2024 Hiring?"/>
        <h2 style={{color:'black'}}> 
        <div dangerouslySetInnerHTML={{ __html: appyInstructions }} />
        </h2>
        </>
    )
}
export default HowToApply;
import PlaceHolder from "./PlaceHolder";

interface ResponsibilityProps {
  description: string;
}

const Responsibility: React.FC<ResponsibilityProps> = ({ description }) => {
  const responsibilities = description.split("\n").filter(res => res.trim() !== ""); // Split description by newline and filter out empty strings

  return (
    <>
      <PlaceHolder text="Responsibility-" />
      <div className="pl-4 mt-4">
        <ul style={{ color: 'black' }} className="list-disc">
          {responsibilities.map((responsibility, index) => (
            <li key={index} style={{ marginTop: '15px' }}>
              <div dangerouslySetInnerHTML={{ __html: responsibility }} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Responsibility;

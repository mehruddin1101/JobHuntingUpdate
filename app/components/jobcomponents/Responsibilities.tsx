import PlaceHolder from "./PlaceHolder";

interface ResponsibilityProps {
  description: string;
}

const Responsibility: React.FC<ResponsibilityProps> = ({ description }) => {
  return (
    <>
      <PlaceHolder text="Responsibility-" />
      <div className="pl-4 mt-4">
        <ul style={{ color: "black" }} className="list-disc">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </ul>
      </div>
    </>
  );
};

export default Responsibility;

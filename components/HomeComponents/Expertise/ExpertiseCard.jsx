import CardLayout from "../../Common/CardLayout";

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-2 p-8 card_stylings">
        <div className="text-Snow font-bold text-lg">{data.title}</div>
        <div className="text-sm text-LightGray font-normal">
          {data.description_structured &&
            data.description_structured.map((item, index) => {
              if (item.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-Snow font-bold text-lg mt-4 mb-2"
                  >
                    {item.content}
                  </h2>
                );
              } else if (item.type === "paragraph") {
                return (
                  <p key={index} className="mb-2">
                    {item.content}
                  </p>
                );
              } else if (item.type === "listItem") {
                return (
                  <li key={index} className="ml-4 list-disc">
                    {item.content.replace(/^•\s*/, "")}
                  </li>
                );
              }
              return null;
            })}
        </div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;

import ExpertiseCard from "./ExpertiseCard";
import TechStackDisplay from "./TechStackDisplay";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import CardLayout from "../../Common/CardLayout";

const MyExpertise = () => {
  // Query for About Me content
  const {
    isLoading: isLoadingAboutMe,
    error: errorAboutMe,
    data: aboutMeContent,
  } = useQuery("aboutMeContent", () =>
    axios
      .get("api/expertise") // Endpoint for About Me
      .then(({ data }) => data)
      .catch((error) => {
        console.error("Error fetching About Me content:", error);
        throw error; // Re-throw to be caught by react-query's error state
      })
  );

  // Query for Tech Stack data
  const {
    isLoading: isLoadingTechStack,
    error: errorTechStack,
    data: techStackData,
  } = useQuery("techStackData", () =>
    axios
      .get("api/techstack")
      .then(({ data }) => data)
      .catch((error) => {
        console.error("Error fetching Tech Stack data:", error);
        throw error;
      })
  );

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        About Me
      </div>
      <div className="grid justify items-center gap-4 px-2 md:px-8 ">
        {isLoadingAboutMe ? (
          [1].map((_, i) => (
            <ParagraphSkeleton key={i} className={"space-y-2 p-8"} />
          ))
        ) : errorAboutMe ? (
          <p className="text-Rose text-center">Error loading About Me.</p>
        ) : (
          aboutMeContent?.map((content, key) => (
            <ExpertiseCard key={key} data={content} />
          ))
        )}
      </div>

      {/* Tech Stack Section - Rendered below About Me */}
      {isLoadingTechStack ? (
        <div className="px-2 md:px-8 py-8">
          <h2 className="text-Snow font-bold text-2xl mb-6 text-center">
            Tech Stack
          </h2>
          <div className="flex justify-center space-x-2 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-24 h-10 bg-MidNightBlack rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8 text-center">
            {[...Array(6)].map((_, i) => (
              <CardLayout key={i} className="animate-pulse">
                <div className="flex flex-col items-center p-4">
                  <div className="w-16 h-16 mb-3 bg-LightGray/20 rounded-full"></div>
                  <div className="h-4 w-20 bg-LightGray/20 rounded"></div>
                </div>
              </CardLayout>
            ))}
          </div>
        </div>
      ) : errorTechStack ? (
        <p className="text-Rose text-center py-8">Error loading Tech Stack.</p>
      ) : (
        techStackData && <TechStackDisplay techStackData={techStackData} />
      )}
    </>
  );
};

export default MyExpertise;

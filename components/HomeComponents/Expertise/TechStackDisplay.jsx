import { useState } from "react";
import { Link } from "react-scroll";

const TechStackDisplay = ({ techStackData }) => {
  if (!techStackData || !techStackData.items || !techStackData.categories) {
    return (
      <p className="text-Snow text-center py-8">
        Tech stack data is not available.
      </p>
    );
  }

  const [activeTab, setActiveTab] = useState(
    techStackData.categories[2] || "Others"
  );
  const filteredTechStack = techStackData.items.filter(
    (item) => item.category === activeTab
  );

  const sectionId = "tech-stack-display-section";

  return (
    <div className="px-2 md:px-8 py-8" id={sectionId}>
      <h2 className="px-2 md:px-8 py-4 text-lg font-bold text-Snow text-center">
        Tech Stack
      </h2>
      <div className="flex justify-center space-x-2 mb-8">
        {techStackData.categories.map((category) => (
          <Link
            key={category}
            to={sectionId}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2.5 button ml-4 text-sm text-LightGray font-semibold rounded-lg  ease-in-out cursor-pointer
                            ${
                              activeTab === category
                                ? "text-white scale-105"
                                : "bg-MidNightBlack hover:bg-DeepNightBlack hover:text-Snow"
                            }
                        `}
          >
            {category}
          </Link>
        ))}
      </div>
      {filteredTechStack.length > 0 ? (
        <div className="grid grid-cols-2 h-[300px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8 text-center">
          {filteredTechStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-4 bg-DeepNightBlack rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={tech.iconUrl}
                alt={tech.name}
                className="w-16 h-16 mb-3 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <div
                style={{ display: "none" }}
                className="w-16 h-16 mb-3 flex items-center justify-center bg-LightGray/20 rounded-full text-Snow text-xs"
              >
                No Icon
              </div>
              <p className="text-sm text-Snow font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-LightGray text-center py-4">
          No technologies found for "{activeTab}".
        </p>
      )}
    </div>
  );
};

export default TechStackDisplay;

import CertificatesCard from "./CertificatesCard";
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const CertificatesSection = () => {
  const {
    isLoading,
    error,
    data: certificatesData,
  } = useQuery("certificates", () =>
    axios
      .get("/api/certificates")
      .then(({ data }) => data)
      .catch((error) => {
        console.error("Error fetching certificates:", error);
        return [];
      })
  );

  if (error)
    return (
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-red-500 text-center">
        Failed to load certificates.
      </div>
    );

  return (
    <section className="py-8 ">
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        My Certificates & Achievements
      </div>
      <div className="overflow-x-auto">
        <div className="inline-flex gap-4 px-2 md:px-8 py-4 min-w-full">
          {isLoading ? (
            // Show skeletons while loading
            <div className="flex gap-4">
              {[1, 2, 3].map((item) => (
                <ParagraphSkeleton
                  key={item}
                  className="w-80 md:w-96 h-[380px] p-4 bg-gray-800 rounded-lg flex-shrink-0"
                />
              ))}
            </div>
          ) : certificatesData?.length > 0 ? (
            // Show certificates
            certificatesData.map((certificate) => (
              <div
                key={certificate.id}
                className="transform transition-all duration-300 hover:scale-[1.01]"
              >
                <CertificatesCard data={certificate} />
              </div>
            ))
          ) : (
            // Show message if no certificates
            <p className="text-Snow text-center w-full py-10">
              No certificates to display at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

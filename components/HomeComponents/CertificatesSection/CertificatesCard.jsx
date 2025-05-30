import { FaExternalLinkAlt } from "react-icons/fa";
import CardLayout from "../../Common/CardLayout";

const CertificatesCard = ({ data }) => {
  // Destructure certificate data
  const {
    imageName,
    certificateName,
    courseName,
    issuingOrganization,
    issueDate,
    credentialURL,
  } = data;
  const imagePath = `/images/certificateImage/${imageName}`;

  return (
    <div className="mb-3">
      <div className="card_stylings overflow-hidden h-full w-80 md:w-96">
        <div className="relative w-full ">
          <img
            src={imagePath}
            alt="portfolio img"
            className="w-full h-[300px] object-cover opacity-85"
          />
        </div>
        <div
          id="certificate-content"
          className="py-3 px-4 hover:- ease-in-out duration-300"
        >
          <div className="flex justify-between items-start">
            <h3
              className="text-base font-semibold text-Snow leading-tight mb-2 truncate"
              title={certificateName}
            >
              {certificateName}
            </h3>
          </div>
          <div className="text-Snow text-xs space-y-1.5 text-LightGray">
            <p>
              <span className="font-medium">Course:</span> {courseName}
            </p>
            <p>
              <span className="font-medium">Issued by:</span>{" "}
              {issuingOrganization}
            </p>
            {/* <p>
            <span className="font-medium">Date:</span> {issueDate}
          </p> */}
          </div>
          {credentialURL && (
            <div className="mt-4">
              <a
                href={credentialURL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-MidNightBlack hover:bg-opacity-80 text-xs text-Primary rounded-full py-2 px-4 transition-all duration-500 hover:-translate-y-0.5"
              >
                View Credential <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatesCard;

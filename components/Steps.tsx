import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";

const generationStepData = [
    {
        icon: <HiOutlineDocumentText className="w-10 h-10 inline-block mr-2" />,
        title: "Build Your Resume",
        description: "Create a professional resume that stands out with our intuitive builder and expert templates"
    },
    {
        icon: <HiOutlineUserGroup className="w-10 h-10 inline-block mr-2" />,
        title: "Practice Interviews",
        description: "Prepare for success with our AI-powered mock interviews and real-time feedback"
    },
    {
        icon: <HiOutlineAcademicCap className="w-10 h-10 inline-block mr-2" />,
        title: "Skill Training",
        description: "Access curated courses and resources to enhance your professional skills"
    },
    {
        icon: <HiOutlineBriefcase className="w-10 h-10 inline-block mr-2" />,
        title: "Find Dream Jobs",
        description: "Connect with top employers and discover opportunities matched to your profile"
    },
];

function GenerationStep() {
    return (
        <div className="grid place-items-center w-full">
            <div className="max-w-6xl w-full py-24 px-4 content-center justify-center">
                <h2 className="text-3xl text-center font-bold">Your Path to Success</h2>
                <div className="grid mt-24 md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
                    {generationStepData.map((item, index) => (
                        <div 
                            key={index} 
                            className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="card-body items-center text-center">
                                <div className="text-indigo-600">{item.icon}</div>
                                <h3 className="card-title text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GenerationStep;
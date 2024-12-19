// BlogContent.js
import React from 'react';

const BlogContent = ({ content }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
   

            {content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-medium mb-4">{section.title}</h2>
                    <p>{section.textcontent}</p>

                 {Array.isArray(section.content) ? (
                        section.content.map((line, idx) =>
                            typeof line === 'object' && line !== null ? (
                                <div key={idx} className="mb-4">
                                    <h3 className="text-xl font-medium">{line.title}</h3>
                                    <p className="text-sub-gray mt-2">{line.description}</p>
                                </div>
                            ) : (
                                <p key={idx} className="text-sub-gray mt-2">{line}</p>
                            )
                        )
                    ) : (
                        <p className="text-sub-gray">{section.content}</p>
                    )}


                    {section.subHeading && (
                        <p className="font-medium text-lg mt-4">{section.subHeading}</p>
                    )}


                    {section.bulletPoints && (
                        <ul className="list-disc pl-8">
                            {section.bulletPoints.map((point, idx) => (
                                <li key={idx} className="text-sub-gray">{point}</li>
                            ))}
                        </ul>
                    )}

                    {section.description && (
                        <p className="text-sub-gray mt-4">{section.description}</p>
                    )}

                    {section.subSections && section.subSections.map((sub, idx) => (
                        <div key={idx} className="mt-4">
                            {sub.text ? <p className="text-sub-gray">{sub.text}</p> : <p className=" font-medium text-gray-700 ">{sub.title}</p>}
                            {sub.bulletPoints && (
                                <ul className="list-disc pl-8">
                                    {sub.bulletPoints.map((point, subIdx) => (
                                        <li key={subIdx} className="text-sub-gray">{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default BlogContent;

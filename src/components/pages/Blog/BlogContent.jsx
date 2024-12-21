import React from 'react';

const BlogContent = ({ content }) => {
    const renderTextWithBold = (text) =>
        text?.split(/\*\*(.*?)\*\*/).map((part, i) => 
            i % 2 ? <span key={i} className=" font-semibold text-gray-800">{part}</span> : part
        );

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-medium mb-4">{section.title !== "Next Steps" && section.title}</h2>
                    <p>{renderTextWithBold(section.textcontent)}</p>

                    <h2 className="mb-3 text-lg  font-normal text-sub-gray">{section?.subheading}</h2>

                    {section.title === "Next Steps" ? (
                        <p className="text-sub-gray mt-4 italic">{renderTextWithBold(section.content)}</p>
                    ) : Array.isArray(section.content) ? (
                        section.content.map((line, idx) =>
                            typeof line === 'object' && line !== null ? (
                                <div key={idx} className="mb-4">
                                    <h3 className="text-xl font-medium">{renderTextWithBold(line.title)}</h3>
                                    <p className="text-sub-gray mt-2">{renderTextWithBold(line.description)}</p>
                                </div>
                            ) : (
                                <p key={idx} className="text-sub-gray  my-3">{renderTextWithBold(line)}</p>
                            )
                        )
                    ) : (
                        <p className="text-sub-gray my-3">{renderTextWithBold(section.content)}</p>
                    )}

                    {section.subHeading && (
                        <p className="font-medium text-lg mt-4">{renderTextWithBold(section.subHeading)}</p>
                    )}


                    {section.subHeading && (
                        <p className="font-medium text-lg mt-4">{renderTextWithBold(section.subHeading)}</p>
                    )}

                    {section.bulletPoints && (
                        <ul className="list-disc pl-8">
                            {section.bulletPoints.map((point, idx) => (
                                <li key={idx} className="text-sub-gray my-2">{renderTextWithBold(point)}</li>
                            ))}
                        </ul>
                    )}

                    {section.subSections && section.subSections.map((sub, idx) => (
                        <div key={idx} className="mt-4">
                            {sub.text ? (
                                <p className="text-sub-gray">{renderTextWithBold(sub.text)}</p>
                            ) : (
                                <p className="font-medium text-gray-700 my-3">{renderTextWithBold(sub.title)}</p>
                            )}

                                                      <p className="text-sub-gray my-3">{renderTextWithBold(sub.description)}</p>
                            
                            {sub.bulletPoints && (
                                <ul className="list-disc pl-8">
                                    {sub.bulletPoints.map((point, subIdx) => (
                                        <li key={subIdx} className="text-sub-gray">{renderTextWithBold(point)}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    {section.description && (
                        <p className="text-sub-gray mt-4">{renderTextWithBold(section.description)}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BlogContent;
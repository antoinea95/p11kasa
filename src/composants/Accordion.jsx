import { useState } from "react"

export default function Accordion ({name, content, contentType}) {

    console.log(content);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-header">
                <h2 className="accordion-header_title">{name}</h2>
                <button className={`accordion-header_button ${isOpen ? "accordion-header_button-rotate" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <img src="/assets/arrow-down.svg" alt="flèche de l'accordéon" />
                </button>
            </div>
            <div className={`accordion-content ${isOpen ? "accordion-content_show" : ""}`}>
                {contentType === "list" ? 
                    (<ul className="accordion-content_list">
                    {content && content.map(item => {return <li key={item} className="accordion-content_list-item">{item}</li>})}
                    </ul>) : 
                    <p>{content}</p>
                }
            </div>
        </div>
    )
}
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Caroussel from "../composants/Caroussel";
import Rating from "../composants/Rating";
import Tag from "../composants/Tag";
import Accordion from "../composants/Accordion";

export default function Property() {
  // Stock params to get property id
  const params = useParams();
  // Use navigate if id doesn't exist
  const navigate = useNavigate();

  // Stock property to display
  const [propertyChosen, setPropertyChosen] = useState({});

  // stock right data for accordion
  const [accordionData, setAccordionData] = useState([]);

  const getPropertyChosen = async () => {
    // get all data
    const res = await axios.get("/data.json");

    // find item wich match id in params
    const property = res.data.find((item) => item.id === params.id);
    // save it
    setPropertyChosen(property);

    // if no property find navigate to 404 page
    if (property === undefined) {
      navigate("/404");
    }
  };

  useEffect(() => {
    getPropertyChosen();
  }, []);

  // Set state variable to display accordion
  useEffect(() => {
    propertyChosen &&
      setAccordionData([
        {
          name: "Description",
          content: propertyChosen.description,
          contentType: "paragraph",
        },
        {
          name: "Equipements",
          content: propertyChosen.equipments,
          contentType: "list",
        },
      ]);
  }, [propertyChosen]);

  return (
    <>
      {propertyChosen && (
        <article className="property">
          {propertyChosen.pictures && (
            <Caroussel pictures={propertyChosen.pictures} />
          )}
          <section className="property-header">
            <div className="property-header_info">
              <h1 className="property-header_info_title">
                {propertyChosen.title}
              </h1>
              <p className="property-header_info_location">
                {propertyChosen.location}
              </p>
              {propertyChosen.tags && <Tag allTag={propertyChosen.tags} />}
            </div>
            {propertyChosen.host && (
              <div className="property-header_owner">
                <h2 className="property-header_owner_name">
                  {propertyChosen.host.name}
                  <img
                    className="property-header_owner_picture"
                    src={propertyChosen.host.picture}
                  />
                </h2>
                <Rating rating={propertyChosen.rating} />
              </div>
            )}
          </section>
          <section className="property-body">
            {accordionData.map((item) => {
              return (
                <Accordion
                  key={item.name}
                  name={item.name}
                  content={item.content}
                  contentType={item.contentType}
                />
              );
            })}
          </section>
        </article>
      )}
    </>
  );
}

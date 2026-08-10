import {
  privacyPolicyData,
  advisoryForInvestorsData,
  disclaimerData,
} from "../../Common/data";
import Header from "../../components/Header/header";
import "./style.css";

type FooterinfoProps = {
  page: string;
};

const Footerinfo = ({ page }: FooterinfoProps) => {
  let dataToRender: any = [];

  if (page === "Privacy Policy") {
    dataToRender = privacyPolicyData;
  } else if (page === "Advisory for Investors") {
    dataToRender = advisoryForInvestorsData;
  } else if (page === "Disclaimer") {
    dataToRender = disclaimerData;
  }
  return (
    <>
      <Header />

      <main className="footer-page">
        <h1>{page}</h1>

        {dataToRender.map((item: any, index: any) => {
          if (item.type === "heading") {
            return <h2 key={index}>{item.text}</h2>;
          }

          if (item.type === "paragraph") {
            return <p key={index}>{item.text}</p>;
          }

          if (item.type === "orderedList") {
            return (
              <ol key={index}>
                {item.items.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ol>
            );
          }

          if (item.type === "unorderedList") {
            return (
              <ul key={index}>
                {item.items.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ul>
            );
          }

          if (item.type === "link") {
            return (
              <p key={index}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.text}
                </a>
              </p>
            );
          }

          return null;
        })}
      </main>
    </>
  );
};

export default Footerinfo;

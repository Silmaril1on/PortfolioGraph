import React from "react";
import styled from "styled-components";
import banner from "../../../../Assets/winemaking cover-min.jpg";

function AskaneliInfo() {
  return (
    <Section>
      <Title>Company History</Title>
      <ImgDiv>
        <Img src={banner} alt="fields" />
      </ImgDiv>
      <Info>
        Company "Askaneli" was founded in 1998 by brothers Chkhaidze. The name
        “Askaneli” is associated with the small, magical village of Askana,
        located in the beautiful region of Guria, where the old cellar, built by
        their ancestor - Antimoz Chkhaidze still stands. Antimoz and his whole
        family was in love with vine and the divine fluid obtained from the
        grapes. They made their wine according to the old Georgian method,
        indigenously in clay vessels - called Kvevri. All members of the family
        were involved in this activity, especially the grandchildren who hosted
        guests with clay Jugs and little terracotta cups. Antimoz Chkhaidze's
        cellar and several pitchers dating back to 1880 are still preserved in
        the village of Askana. Tradition of this beautiful family was revived by
        brothers Chkhaidze. The founder of the company Gocha Chkhaidze has been
        working for years to revitalize Georgian viticulture, preserve and
        recover unique grape varieties. The company owns hundreds of hectars of
        vineyards, two winemaking facilities in Kakheti and Tbilisi and one
        fruit distillery in Guria. In addition of producing more than 60
        denominations of wine, company produces aged brandy, chacha and brut.
        “Askaneli” is one of the largest organizations in Georgia, which is in
        the top three winemaking company ratings of wine production and vine
        farming.
      </Info>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 3px;
  width: auto;
  @media (min-width: 900px) {
    width: 30%;
  }
`;

const ImgDiv = styled.div`
  height: 150px;
  width: 100%;
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Title = styled.h1`
  color: black;
  font: bold 1.5rem semplicitapro;
  letter-spacing: 3px;
  text-decoration: underline;
  padding: 5px;
`;

const Info = styled.h3`
  color: #151515;
  font: normal 0.7rem semplicitapro;
  float: left;
  padding: 5px;
  @media (min-width: 1200px) {
    font-size: 0.85rem;
  }
`;

export default AskaneliInfo;

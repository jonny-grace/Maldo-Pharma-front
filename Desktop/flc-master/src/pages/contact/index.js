import Link from "next/link";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Contactcomponent from "../../components/Contactcomponent";
const index = ({contact,footer}) => {

  const ourOffice = footer.data.attributes

  return (

    <>
    <Navbar />
    <Contactcomponent contact={contact} footer={footer}/>
    
    </>
  ); 
};

export default index;


export async function getStaticProps() {
  var contact = {};
  var footer = {};
  const apiUrl = process.env.APIURL;
  await axios
  .get(`${apiUrl}/contact?populate=*`)
    .then((res) => {
      contact = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

    await axios
    .get(`${apiUrl}/footer?populate=*`)

    .then((res) => {
      footer = res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return {
    props: {
      contact,
      footer
    
    },
    revalidate: 10, 
  };
}
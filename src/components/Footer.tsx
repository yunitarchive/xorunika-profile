
import Link from "./Link";
const katalogSocialLinks = [
  {
   "label":"Linkedin",
    "url":"https://in.linkedin.com"
},
{
  "label":"Instagram",
   "url":"https://www.instagram.com"
},
{
  "label":"Twitter",
   "url":"https://x.com/"
}
];


const Footer = () => {

  return (
    <footer className="flex justify-between p-4 px-8 mb-0   bg-black-400">
    <div className="flex gap-x-10 ml-10 py-0">
           <p className="my-3 text-lightGreen ">
          Build with ⚡
          </p>
    </div>
    <div className="flex gap-x-10 mr-10 py-0 justify-end">
      <div className="my-3 md:mb-0">
          <Link mode="horizontal" color="text-lightGreen" katalogLinks={katalogSocialLinks}/>
      </div>
    </div>
  </footer>


  );
}

export default Footer;
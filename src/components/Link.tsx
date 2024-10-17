import {FC} from "react";
interface LinkProps{
    katalogLinks: Links[];
    mode:string;
    color:string;
}
interface Links{
    label:string;
    url:string;
}
const Link: FC <LinkProps> =({katalogLinks, mode,color}) =>{
    let modeElement;
    if(mode ==="horizontal"){
        modeElement = (
            <div className="hidden lg:flex lg:gap-x-10 mr-20 py-0">
          {katalogLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`text-lg hover:font-bold ${color}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        );
    }
    else if (mode === "vertical") {
        modeElement = (
            <div className={`flex flex-col gap-y-2 gap-x-8  p-4 ${color}`}>
                {katalogLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        className={`text-2xl font-medium py-1 hover:font-bold ${color}`}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        );
    }
    return(

modeElement
    )
};

export default Link
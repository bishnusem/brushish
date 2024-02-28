import { groq } from "next-sanity";
import { headertype } from "./types/headerType";
import { client } from "./lib/client";
import { heroType } from "./types/heroType";

//*------------------->
//*---------------------------> Header
//*------------------->

export async function getHeader(): Promise<headertype> {
  return client.fetch(groq`*[_type == "headerSchema"][0] {
        _id,
        _createdAt,
        "backgroundImage": backgroundImage.asset->url,
        "backgroundImageHotspot": backgroundImage.hotspot {
            x,
            y,
        },
        logoColor,   
    }`);
}

//*------------------->
//*---------------------------> Hero
//*------------------->
export async function getHero(): Promise<heroType> {
  return client.fetch(groq`*[_type == "heroSchema"][0] {
        _id,
        _createdAt,
        title,
        subtitle,
        "backgroundImage": backgroundImage.asset->url,
        "backgroundImageHotspot": backgroundImage.hotspot {
            x,
            y,
        },   
    }`);
}

import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'About',
 description: 'About descriptions ',
 keywords: ['About', 'juan','informacion']
};

export default function AboutPage(){
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}
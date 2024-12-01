import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Contact',
    description: 'Contact descriptions ',
    keywords: ['Contact', 'product','information']
   };
   
export default function ContactPage(){
    return (
        <>
            <span className="text-5xl">Contact Page</span>
        </>
    )
}
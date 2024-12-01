import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Pricing',
    description: 'Pricing descriptions ',
    keywords: ['Pricing', 'product','information']
   };
   
   
export default function PricingPage(){
    return (
        <>
            <span className="text-5xl">Pricing Page</span>
        </>
    )
}
import { PortableTextBlock } from "@portabletext/react";

export type Experience = {
    _id: string;
    _createdAt: Date;
    company: string;
    company_logo: string;
    position: string;
    location: string;
    startDate: Date;
    endDate: Date;
    currentjob: boolean;
    stack: string;
    description: PortableTextBlock[]
}
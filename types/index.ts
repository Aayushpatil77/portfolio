export interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    imgSrc: string;
    className: string;
}

export interface WorkflowCardProps {
    heading: string;
    subHeading: string;
}

export interface ServiceCardProps {
    price: string;
    previousPrice?: string;
    className?: string;
    features: Array<string>;
}
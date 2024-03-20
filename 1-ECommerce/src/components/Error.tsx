interface ErrorProps {
  heading: string;
  subheading: string;
}

export const Error = ({ heading, subheading }: ErrorProps) => (
  <div className="flex flex-col items-center justify-center gap-12">
    <h2 className="text-4xl font-bold">{heading}</h2>
    <p className="text-xl">{subheading}</p>
  </div>
);

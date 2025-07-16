import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-4">
          <Button title="Small Sharp" styles="px-2 py-1 text-sm rounded-sm" />
          <Button
            title="Small Rounded"
            styles="px-2 py-1 text-sm rounded-full"
          />
        </div>

        <div className="flex gap-4">
          <Button
            title="Medium Default"
            styles="px-4 py-2 text-base rounded-md"
          />
        </div>

        <div className="flex gap-4">
          <Button
            title="Large Rounded"
            styles="px-6 py-3 text-lg rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

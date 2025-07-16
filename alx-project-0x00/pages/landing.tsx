import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="p-8">
      <h1>Button Variants</h1>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-4">
          <Button
            title="Small Sharp"
            styles={{ size: "small", shape: "rounded-sm" }}
          />
          <Button
            title="Small Rounded"
            styles={{ size: "small", shape: "rounded-full" }}
          />
        </div>

        <div className="flex gap-4">
          <Button title="Medium Default" styles={{ size: "medium" }} />
          <Button
            title="Medium Pill"
            styles={{ size: "medium", shape: "rounded-full" }}
          />
        </div>

        <div className="flex gap-4">
          <Button
            title="Large Rounded"
            styles={{ size: "large", shape: "rounded-md" }}
          />
          <Button
            title="Large Full"
            styles={{ size: "large", shape: "rounded-full" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

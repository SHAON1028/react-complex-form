import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
type FormData = { name: string; email: string; age: number };
const BasicForm = () => {
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  const {name} = form.formState.errors
  return (
    <div>
      <h2 className="text-2xl font-bold">Basic Form</h2>
      <div className="mt-3 border p-4">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...form.register("name")}
              placeholder="Enter your name"
              className="border rounded-md p-2"
            />
          </div>
          {/* <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600">Submit</button> */}
           <Button className="cursor-pointer hover:bg-blue-600 hover:text-white mt-2">Button</Button>
        </form>
      </div>
    </div>
  );
};

export default BasicForm;

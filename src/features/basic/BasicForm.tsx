import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { register } from "module";
import { HTMLInputTypeAttribute } from "react";
import { Path, RegisterOptions, useForm, UseFormRegister } from "react-hook-form";
type FormData = { name: string; email: string; age: number };
/**
 * BasicForm is a React functional component that renders a form with fields for
 * name, email, and age. It uses the `useForm` hook from `react-hook-form` to manage
 * form state and validation. The form validates input fields and displays error
 * messages when inputs are invalid. Upon successful submission, it triggers the
 * `onSubmit` function, which alerts the form data as a JSON string.
 *
 * Form fields:
 * - Name: Text input, required.
 * - Email: Text input, required, must be a valid email format.
 * - Age: Text input, required.
 *
 * The form also utilizes a custom Button component for submission.
 * 
 * 
//  * 1.make a custom input for reuse

@cons

  *we have to validate the input fields by ourselves
 */

const BasicForm = () => {
  const form = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  const { errors, dirtyFields } = form.formState;
  return (
    <div>
      <h2 className="text-2xl font-bold">Basic Form</h2>
      <div className="mt-3 border p-4">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            name="name"
            type="text"
            register={form.register}
            placeholder="Enter your name"
            dirty={dirtyFields.name}
            hasError={!!errors.name}
            errorMessage={errors.name?.message}
            validator={{ required: "Name is required" }}
          />
          <TextField
            label="Email"
            name="email"
            type="text"
            register={form.register}
            placeholder="Enter your email"
            dirty={dirtyFields.email}
            hasError={!!errors.email}
            errorMessage={errors.email?.message}
            validator={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            register={form.register}
            placeholder="Enter your age"
            dirty={dirtyFields.age}
            hasError={!!errors.age}
            errorMessage={errors.age?.message}
            validator={{ required: "Age is required" }}
          />
          {/* <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              id="email"
              {...form.register("email", {
                required: "Invalid email",
                pattern: /^\S+@\S+$/i,
              })}
              placeholder="Enter your name"
              className={cn(
                "border p-2 rounded-md",
                errors.email && "border-red-500",
                errors.email && dirtyFields.email && "border-red-500 border-2"
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="name">Age</label>
            <input
              type="text"
              id="name"
              {...form.register("age", { required: "Email is required" })}
              placeholder="Enter your name"
              className={cn(
                "border p-2 rounded-md",
                errors.age && "border-red-500",
                errors.age && dirtyFields.age && "border-red-500 border-2"
              )}
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </div> */}
          {/* <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600">Submit</button> */}
          <Button className="mt-2 cursor-pointer">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default BasicForm;

type TextFieldProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  name: Path<FormData>;
  placeholder?: string;
  className?: string;
  validator?: RegisterOptions<FormData>;
  dirty?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  register: UseFormRegister<FormData>;
};

const TextField = ({
  label,
  name,
  type,
  className,
  dirty,
  errorMessage,
  hasError,
  placeholder,
  validator,
  register
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        id={name}
        {...register(name, validator)}
        placeholder={placeholder}
        className={cn(
          "border p-2 rounded-md",
         ( hasError ||  dirty) && "border-red-500 border-2",
          className
        )}
      />
      {hasError && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

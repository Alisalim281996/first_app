import CheckBoxInput from "@/components/form/CheckBoxInput";
import FormContiner from "@/components/form/FormContiner";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import SubmitButton from "@/components/form/SubmitButton";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProductFunction } from "@/utils/action";
import React from "react";

const CreateProductPage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <div className="border p-8 rounded-md">
        <FormContiner action={createProductFunction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput type="text" name="name" label="Product Name" />
            
            <PriceInput name="price"/>
            <ImageInput name="image" />
            <TextAreaInput name="description" labelText="Product Description" />
            <div className="mt-6">
              <CheckBoxInput name="featured" label="featured" />
            </div>
            <SubmitButton text="create Product" className="mt-6" />
          </div>
        </FormContiner>
      </div>
    </section>
  );
};

export default CreateProductPage;

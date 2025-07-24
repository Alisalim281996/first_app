import ImageInputContiner from "@/components/admin/products/ImageInputContiner";
import CheckBoxInput from "@/components/form/CheckBoxInput";
import FormContiner from "@/components/form/FormContiner";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import SubmitButton from "@/components/form/SubmitButton";
import TextAreaInput from "@/components/form/TextAreaInput";
import {
  fetchSingleProduct,
  updateProductImageAction,
  updatProductAction,
} from "@/utils/action";
import React from "react";

const EditProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);
  const { name, description, price, featured, image } = product;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <div className="border p-8 rounded-md">

        <ImageInputContiner
          action={updateProductImageAction}
          name={name}
          image={image}
          text="Upload Image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={image} />
        </ImageInputContiner>

        <FormContiner action={updatProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="Product Name"
              defaultValue={name}
            />

            <PriceInput name="price" defaultValue={price} />
            <ImageInput name="image" />
            <TextAreaInput
              name="description"
              labelText="Product Description"
              defaultValue={description}
            />
            <div className="mt-6">
              <CheckBoxInput
                name="featured"
                label="featured"
                defaultChecked={featured}
              />
            </div>
            <SubmitButton
              text="Update Product"
              className="mt-6 hover:cursor-pointer"
            />
          </div>
        </FormContiner>
      </div>
    </section>
  );
};

export default EditProductPage;

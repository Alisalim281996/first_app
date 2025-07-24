import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { deleteProduct, fetchAdminPost } from "@/utils/action";
import { formatCurrency } from "@/utils/format";
import { Edit2 } from "lucide-react";
import { links } from "@/utils/link";
import IconButton from "@/components/admin/products/iconButton";
import FormContiner from "@/components/form/FormContiner";

const ProductPage = async () => {
  const getPost = await fetchAdminPost();

  const total = getPost.length;
  return (
    <section>
      <Table>
        <TableCaption>Total Products {total}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {getPost.map((product) => {
            const { id, name, price } = product;
            const priceFormat = formatCurrency(price);
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    href={`${links.PRODUCTS.href}/${id}`}
                    className="underline capitalize hover:text-white text-muted-foreground tracking-wide"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{priceFormat}</TableCell>
                <TableCell className="flex gap-1 items-center">
                  <Link href={`${links.AdminProducts.href}/${id}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>

                  <DeleteProduct productId={id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default ProductPage;

function DeleteProduct({ productId }: { productId: string }) {
  const delete_product = deleteProduct.bind(null, { productId });
  return (
    <FormContiner action={delete_product}>

      <IconButton actionType="delete" />
    </FormContiner>
  );
}

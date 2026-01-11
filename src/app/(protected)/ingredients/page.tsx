import IngredientForm from "@/forms/ingridient.form";
import IngredientsTable from "@/components/ui/tables/Ingredients";

export default function IngredientsPage() {
  return (
    <div className="flex flex-col items-center justify-center font-sans dark:bg-black">
      <h1 className="text-2xl font-bold mb-4">Ингредиенты</h1>
      <IngredientForm />
      <IngredientsTable />
    </div>
  );
}

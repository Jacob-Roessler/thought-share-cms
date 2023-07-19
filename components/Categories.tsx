import Link from 'next/link';
import { getCategories } from '@/services';
import { Category } from '@/types/Category';

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="mt-2 px-10 py-10 bg-base-100 rounded-lg shadow-xl">
      <div className="mb-1 border-b border-white border-opacity-25">Categories</div>
      <div className="flex flex-row flex-wrap gap-1">
        {categories?.map((category: Category, i: number) => {
          return (
            <Link
              key={category.id}
              className="badge badge-primary hover:scale-105"
              href={`/categories/${category.slug}`}
            >
              {category.name} ({category.count})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

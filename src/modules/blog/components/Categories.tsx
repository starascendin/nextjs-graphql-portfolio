import { useEffect, useState } from 'react';
import { getCategories } from 'shared/services';
import { PostCategory } from 'interfaces';
import { useRouter } from 'next/router';
import { NavLink } from 'shared/components';

export const Categories = () => {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[] | undefined
  >();
  const [activeCategory, setActiveCategory] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    void getCategories().then((cat: PostCategory[]) => setCategories(cat));
  }, []);

  useEffect(() => {
    categories?.map((category) => {
      if (asPath.split('/')[3] === category.slug) {
        setActiveCategory(true);
      }
    });
  }, []);

  return (
    <div className="py-4 flex flex-wrap justify-center text-center">
      <NavLink
        to="/blog"
        additionalClasses="mt-4"
        text={'All'}
        activeCategory={activeCategory}
      />
      {categories?.map((category, idx) => (
        <NavLink
          key={idx}
          to={`/blog/category/${category.slug}`}
          additionalClasses="mt-4"
          text={category.name}
          activeCategory={activeCategory}
        />
      ))}
    </div>
  );
};
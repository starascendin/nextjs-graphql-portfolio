'use client';

import { PostDTO } from 'interfaces';
import moment from 'moment';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getRecentPosts, getSimilarPosts } from 'shared/services';

interface PostWidgetProps {
  categoriesSlugs: string[];
  slug: string;
}

export const PostWidget = ({
  categoriesSlugs,
  slug
}: Partial<PostWidgetProps>) => {
  const [relatedPosts, setRelatedPosts] = useState<PostDTO[]>();

  useEffect(() => {
    if (slug && categoriesSlugs) {
      void getSimilarPosts(slug, categoriesSlugs).then((result: PostDTO[]) =>
        setRelatedPosts(result)
      );
      return;
    }

    void getRecentPosts().then((result: PostDTO[]) => setRelatedPosts(result));
  }, [categoriesSlugs, slug]);

  return (
    <div className="pt-8 pb-4">
      <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts &&
        relatedPosts.map((post) => (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="flex-grow">
              <p className="text-gray-500 font-xs">
                {moment(post.createdAt).format('MMMM DD, YYYY')}
              </p>
              <Link
                href={`/blog/post/${post.slug}`}
                className="text-md animated-link"
              >
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

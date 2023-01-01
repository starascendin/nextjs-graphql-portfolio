import { OneFourthLayout, Sidebar } from 'core/components';
import { Posts, PostWidget } from 'modules/blog/components';
import Head from 'next/head';
import { SearchBar } from 'shared/components';
import { usePostsContext, useSearchContext } from 'shared/hooks';

const SearchPage = () => {
  const { posts } = usePostsContext();
  const { searchValue } = useSearchContext();

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Search | Adrian Zinko | Blog</title>
      </Head>
      <SearchBar />
      <h2 className="text-2xl md:text-3xl mb-8">
        {searchValue ? (
          <span>
            Results for query : <b>{searchValue}</b>
          </span>
        ) : (
          'All Posts'
        )}
      </h2>
      <OneFourthLayout
        childrenLeft={posts && <Posts posts={posts} />}
        childrenRight={
          <Sidebar>
            <PostWidget />
          </Sidebar>
        }
      />
    </div>
  );
};

export default SearchPage;
